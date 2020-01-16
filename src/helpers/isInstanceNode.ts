//this function allows you to check whether a node is part of an instance
export default function isInstanceNode(node: BaseNode): boolean {
	const parent = node.parent
	if (parent.type === 'PAGE') {
		return false
	} else if (parent.type === 'INSTANCE') {
		return true
	} else {
		return isInstanceNode(parent)
	}
}
