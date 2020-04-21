/**
 * Checks node to be PageNode
 */
export const isPageNode = (node: BaseNode): node is PageNode => {
	return node.type === 'PAGE'
}

/**
 * Checks node to be GroupNode
 */
export const isGroupNode = (node: BaseNode): node is GroupNode => {
	return node.type === 'GROUP'
}

/**
 * Checks node to be FrameNode
 */
export const isFrameNode = (node: BaseNode): node is FrameNode => {
	return node.type === 'FRAME'
}

/**
 * Checks node to be TextNode
 */
export const isTextNode = (node: BaseNode): node is TextNode => {
	return node.type === 'TEXT'
}

/**
 * Checks node to be InstanceNode
 */
export const isInstanceNode = (node: BaseNode): node is InstanceNode => {
	return node.type === 'INSTANCE'
}

/**
 * Checks node to be ComponentNode
 */
export const isComponentNode = (node: BaseNode): node is ComponentNode => {
	return node.type === 'COMPONENT'
}

/**
 * Checks node to be one of provided types
 */
export const isOneOfNodeType = (node: BaseNode, typeList: NodeType[]) => {
	return typeList.includes(node.type)
}
