//this function allows you to check whether a node is part of an rootNode
export default function isPartOfNode(part: BaseNode?, rootNode: BaseNode): boolean {
	while (part) {
		if (part === rootNode) {
			return true
		}
		part = part.parent
	}
	return false
}
