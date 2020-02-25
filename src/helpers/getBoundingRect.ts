import getNodeIndex from './getNodeIndex'

// this function return a bounding rect for an nodes
// x/y absolute coordinates
// height/width
// x2/y2 bottom right coordinates
export default function getBoundingRect(nodes: SceneNode[]) {
	const boundingRect = {
		x: 0,
		y: 0,
		x2: 0,
		y2: 0,
		height: 0,
		width: 0
	}

	if (nodes.length > 0) {
		const xy = nodes.reduce(
			(rez, node) => {
				if (node.rotation === 0) {
					pushXY(node, rez)
				} else {
					// if the node is rotated, wrap it in a group
					let index = getNodeIndex(node)
					let parent = node.parent
					let group = figma.group([node], parent, index)

					pushXY(group, rez)
					parent.insertChild(index, node)
				}
				
				return rez
			},
			{ x: [], y: [], x2: [], y2: [] }
		)

		const rect = {
			x: Math.min(...xy.x),
			y: Math.min(...xy.y),
			x2: Math.max(...xy.x2),
			y2: Math.max(...xy.y2)
		}

		boundingRect.x = rect.x
		boundingRect.y = rect.y
		boundingRect.x2 = rect.x2
		boundingRect.y2 = rect.y2
		boundingRect.width = rect.x2 - rect.x
		boundingRect.height = rect.y2 - rect.y


		// to assemble coordinates
		function pushXY(node, rez) {
			const [[, , x], [, , y]] = node.absoluteTransform
			rez.x.push(x)
			rez.y.push(y)
			rez.x2.push(x + node.width)
			rez.y2.push(y + node.height)
		}
	}

	return boundingRect
}
