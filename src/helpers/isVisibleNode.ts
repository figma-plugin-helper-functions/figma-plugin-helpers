/**
 * This helper recursively checks all parents for visibility, to guarantee that's node is visible
 */

export default function isVisibleNode(node: SceneNode): boolean {
	if (node && node.parent) {
		if (node.visible && node.parent.type !== 'PAGE') {
			return isVisibleNode(node.parent as SceneNode)
		} else {
			return node.visible
		}
	} else {
		return false
	}
}
