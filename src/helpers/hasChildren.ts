/**
 * Checks node to have children nodes
 * For example:
 * 
 * ```ts
 * // BEFORE
 * console.log(node.children) // throw TS error "Property 'children' does not exist on type ..."
 * 
 * // AFTER
 * if (hasChildren(node)) {
 *  console.log(node.children) // valid code
 * }
 * ```
 * 
 */
export default (node: BaseNode): node is BaseNode & ChildrenMixin => Boolean(node['children'])