import { isInstanceNode, isGroupNode, isPageNode } from '..'

/**
 *  calculate relative position of node by asix
 **/
const getRealtivePosition = (
	node: BaseNode,
	asix: 'x' | 'y',
	conditionFunc?: (node: BaseNode) => boolean
) => {
	conditionFunc = conditionFunc || (() => false)
	if (!node || conditionFunc(node.parent) || isPageNode(node.parent)) {
		return 0
	} else if (isInstanceNode(node) && isGroupNode(node.parent)) {
		return node[asix]
	} else if (isGroupNode(node)) {
		return getRealtivePosition(node.parent, asix, conditionFunc)
	} else {
		return node[asix] + getRealtivePosition(node.parent, asix, conditionFunc)
	}
}

export default getRealtivePosition
