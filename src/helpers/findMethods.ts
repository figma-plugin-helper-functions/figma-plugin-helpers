import { hasChildren } from '..'

type Children = readonly SceneNode[] | readonly PageNode[];
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
	const result = [];
	for (let i = 0; i < nodes.length; i++) {
		if (iteratee(nodes[i], i, nodes)) {
			result.push(nodes[i]);
		} else if (hasChildren(nodes[i])) {
			result.push(...findAll(nodes[i]['children'], iteratee))
		}
	}
	return result;
}

/**
 * Custom implementation of the figma.findOne method, which runs x100 times faster.
 *
 * ### Usage example
 * ```ts
 * import { findOne, isTextNode } from "@figma-plugin/helpers"
 *
 * const textNode = findOne(figma.currentPage.children, isTextNode)
 * ```
 *
 * ### How to replace native `figma.findOne`
 * ```diff
 * + import { findOne } from "@figma-plugin/helpers"
 *
 * - const textNode = figma.currentPage.findOne((node) => node.type === "TEXT");
 * + const textNode = findOne(figma.currentPage.children, (node) => node.type === "TEXT")
 * ```
 */
export const findOne = (
	nodes: Children,
	iteratee: (elem?: BaseNode, idx?: number, array?: Children) => boolean
) => {
	for (let i = 0; i < nodes.length; i++) {
		if (iteratee(nodes[i], i, nodes)) {
			return nodes[i]
		} else if (hasChildren(nodes[i])) {
			return findOne(nodes[i]['children'], iteratee)
		}
	}
	return null
}
