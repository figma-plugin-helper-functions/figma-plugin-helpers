import getNodeIndex from './getNodeIndex'

// this function return bounding rect nodes
// x/y coordinates
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
		if (nodes.length === 1) {
			const node = nodes[0]

			boundingRect.x = node.x
			boundingRect.y = node.y
			boundingRect.x2 = node.x + node.width
			boundingRect.y2 = node.y + node.height
			boundingRect.width = node.width
			boundingRect.height = node.height
		} else {
			const is = nodes.some((node) => node.parent !== nodes[0].parent)

			// parents are the same for the selected nodes
			if (!is) {
				const xy = nodes.reduce(
					(rez, node) => {
						rez.x.push(node.x)
						rez.y.push(node.y)
						rez.x2.push(node.x + node.width)
						rez.y2.push(node.y + node.height)
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
			} else {
				// keep the position of the elements
				const parents = nodes.map((node) => ({
					id: node.id,
					parent: node.parent,
					index: getNodeIndex(node)
				}))

				const group = figma.group(nodes, figma.currentPage)

				boundingRect.x = group.x
				boundingRect.y = group.y
				boundingRect.x2 = group.x + group.width
				boundingRect.y2 = group.y + group.height
				boundingRect.width = group.width
				boundingRect.height = group.height

				// return the elements to their original positions.
				nodes.forEach((e) => {
					const [[, , x], [, , y]] = e.absoluteTransform
					const p = parents.find((p) => e.id === p.id)
					if (p) {
						p.parent.appendChild(e)
					} else {
						// never know what ..
						figma.currentPage.appendChild(e)
					}
					e.x = x
					e.y = y
				})
			}
		}
	}

	return boundingRect
}
