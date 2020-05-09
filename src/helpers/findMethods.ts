import { hasChildren } from '..'

type Children = readonly SceneNode[] | readonly PageNode[]
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
	nodes: Children,
	iteratee: (elem?: BaseNode, idx?: number, array?: Children) => boolean
) => {
	const result = []
	for (let i = 0; i < nodes.length; i++) {
		if (iteratee(nodes[i], i, nodes)) {
			result.push(nodes[i])
		} else if (hasChildren(nodes[i])) {
			result.push(...findAll(nodes[i]['children'], iteratee))
		}
	}
	return result
}
