import { isInstanceNode, isGroupNode, isPageNode } from '../'

// calculate absolute position of node by asix based on top level element
const getAbsolutePosition = (node: BaseNode, asix: 'x' | 'y') => {
	if (!node) {
		return 0
	} else if (isInstanceNode(node) && isGroupNode(node.parent)) {
		return node[asix]
	} else if (isGroupNode(node)) {
		return getAbsolutePosition(node.parent, asix)
	} else if (!isPageNode(node.parent)) {
		return node[asix] + getAbsolutePosition(node.parent, asix)
	}
	return 0
}

export default getAbsolutePosition
