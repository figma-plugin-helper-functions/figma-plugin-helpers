import { isPageNode } from './isTypeNode'

/**
 * this function allows you to pass in a node and return its pageNode
 */
export default function getPage(node: BaseNode): PageNode {
	if (!isPageNode(node)) {
		return getPage(node.parent)
	} else {
		return node
	}
}
