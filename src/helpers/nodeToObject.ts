export default function nodeToObject(node) {
	const props = Object.entries(Object.getOwnPropertyDescriptors(node.__proto__))
	const blacklist = ['parent', 'children', 'removed']
	const obj: any = { id: node.id, type: node.type, children: undefined }
	if (node.parent) obj.parent = { id: node.parent.id, type: node.type }
	for (const [name, prop] of props) {
		if (prop.get && blacklist.indexOf(name) < 0) {
			obj[name] = prop.get.call(node)
			if (typeof obj[name] === 'symbol') obj[name] = 'Mixed'
		}
	}
	if (node.children) obj.children = node.children.map((child) => nodeToObject(child))
	if (node.masterComponent) obj.masterComponent = nodeToObject(node.masterComponent)
	return obj
}
