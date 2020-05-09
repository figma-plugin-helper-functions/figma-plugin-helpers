import { hasChildren } from '..'

/**
 * Custom implementation of the figma.findAll method, which runs x1000 times faster.
 * 
 * ### Usage example
 * ```ts
 * import { findAll, isTextNode } from "@figma-plugin/helpers"
 * 
 * const textNodes = findAll(figma.currentPage.children, isTextNode)
 * ```
 * 
 * ### How to replace native `figma.findAll`
 * ```diff
 * + import { findAll } from "@figma-plugin/helpers"
 * 
 * - const textNodes = figma.currentPage.findAll((node) => node.type === "TEXT");
 * + const textNodes = findAll(figma.currentPage.children, (node) => node.type === "TEXT")
 * ```
 */
export const findAll = (
	nodes: readonly SceneNode[],
	iteratee: (elem?: BaseNode, idx?: number, array?: readonly SceneNode[]) => boolean
) => {
	return nodes.reduce((prev, el, i, arr) => {
		if (iteratee(el, i, arr)) {
			prev.push(el)
		} else if (hasChildren(el)) {
			prev.push(...findAll(el.children, iteratee))
		}
		return prev
	}, [])
}
