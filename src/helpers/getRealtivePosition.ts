import { isInstanceNode, isGroupNode, isPageNode } from '..'

// calculate absolute position of node by asix based on top level element
const getRealtivePosition = (node: BaseNode, asix: 'x' | 'y') => {
	if (!node) {
		return 0
	} else if (isInstanceNode(node) && isGroupNode(node.parent)) {
		return node[asix]
	} else if (isGroupNode(node)) {
		return getRealtivePosition(node.parent, asix)
	} else if (!isPageNode(node.parent)) {
		return node[asix] + getRealtivePosition(node.parent, asix)
	}
	return 0
}

export default getRealtivePosition
