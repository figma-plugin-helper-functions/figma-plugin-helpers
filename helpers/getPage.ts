//this function allows you to pass in a node and return its pageNode
export default function getPage(node:BaseNode):PageNode {
	while (node.type != 'PAGE') {
		node = node.parent;
	}
	return node;
}