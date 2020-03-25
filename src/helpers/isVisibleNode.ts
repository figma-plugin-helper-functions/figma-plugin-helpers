//this function allows you to check actual node visibility
export default function isVisibleNode(node: SceneNode): boolean {
	let part: PageNode | SceneNode = node
	
	while (part && part.type != 'PAGE') {
		if (!part.visible) {
			return false
		}
		part = part.parent as PageNode | SceneNode
	}
	return true
}