//this function allows you to get the return the index of node in its parent
export default function getNodeIndex(node: SceneNode): number {
	return node.parent.children.indexOf(node)
}
