import { applyMatrixToPoint } from './applyMatrixToPoint'

/**
 *  this function return a bounding rect for an nodes
 */
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
				const halfHeight = node.height / 2
				const halfWidth = node.width / 2

				const [[c0, s0, x], [s1, c1, y]] = node.absoluteTransform
				const matrix = [
					[c0, s0, x + halfWidth * c0 + halfHeight * s0],
					[s1, c1, y + halfWidth * s1 + halfHeight * c1]
				]

				// the coordinates of the corners of the rectangle
				const XY = [
					[1, -1, 1, -1],
					[1, -1, -1, 1]
				]

				// fill in
				for (let i = 0; i <= 3; i++) {
					const a = applyMatrixToPoint(matrix, [
						XY[0][i] * halfWidth,
						XY[1][i] * halfHeight
					])
					XY[0][i] = a[0]
					XY[1][i] = a[1]
				}

				XY[0].sort((a, b) => a - b)
				XY[1].sort((a, b) => a - b)

				rez.x.push(XY[0][0])
				rez.y.push(XY[1][0])
				rez.x2.push(XY[0][3])
				rez.y2.push(XY[1][3])

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
	}

	return boundingRect
}
