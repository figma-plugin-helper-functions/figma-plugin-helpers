/**
 * this function allows you to check whether a node is part of an rootNode
 */
export default function isPartOfNode(part: SceneNode, rootNode: BaseNode): boolean {
	const parent = part.parent
	if (parent === rootNode) {
		return true
	} else if (parent.type === 'PAGE') {
		return false
	} else {
		return isPartOfNode(parent as SceneNode, rootNode)
	}
}
