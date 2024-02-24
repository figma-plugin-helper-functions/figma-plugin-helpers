/**
 * Transform node to object with keys, that are hidden by default.
 * For example:
 * ```ts
 * const node = figma.currentPage.findOne((el) => el.type === "TEXT");
 * console.log(Object.keys(node).length) // 1
 * console.log(Object.keys(nodeToObject(node)).length) // 42
 * console.log(Object.keys(nodeToObject(node, true)).length) // 39
 * ```
 *
 * @param node
 * @param withoutRelations
 */
export const nodeToObject = (node: any, withoutRelations?: boolean) => {
	const props = Object.entries(Object.getOwnPropertyDescriptors(node.__proto__))
	const blacklist = ['parent', 'children', 'removed']
	const obj: any = { id: node.id, type: node.type }
	for (const [name, prop] of props) {
		if (prop.get && !blacklist.includes(name)) {
			try {
				if (typeof obj[name] === 'symbol') {
					obj[name] = 'Mixed'
				} 
				else if (name === 'mainComponent' || name === 'masterComponent') {
					let mainComponent = await node.getMainComponentAsync();
					obj[name] = mainComponent.id;
				}
				else if (name === 'instances' || name === 'exposedInstances') {
					let instances = await node.getInstancesAsync();
					obj[name] = instances.map((instance: any) => instance.id);
				}
				else {
					obj[name] = prop.get.call(node);
				}
			} catch (err) {
				obj[name] = undefined
			}
		}
	}
	if (node.parent) {
		obj.parent = { id: node.parent.id, type: node.parent.type }
	}
	if (node.children) {
		obj.children = [];
		for (const child of node.children) {
			try {
				obj.children.push(await nodeToObject(child, withoutRelations));
			}
			catch (err) {
				console.log(err);
			}
		}
	}
	return obj;
}
