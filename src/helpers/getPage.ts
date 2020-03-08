//this function allows you to pass in a node and return its pageNode
export default function getPage(node: BaseNode) {
	while (node && node.type != 'PAGE') {
		node = node.parent
	}
	return node as PageNode
}
