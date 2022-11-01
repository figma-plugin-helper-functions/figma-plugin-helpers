import isUndefined from 'lodash.isundefined'
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

	if (nodes.length) {
		const xy = nodes.reduce(
			(rez, node) => {
				if (!node.absoluteTransform) {
					console.warn(
						'Provided node haven\'t "absoluteTransform" property, but it\'s required for calculations.'
					)
					return rez
				}
				if (isUndefined(node.height) || isUndefined(node.width)) {
					console.warn(
						'Provided node haven\'t "width/height" property, but it\'s required for calculations.'
					)
					return rez
				}
				const halfHeight = node.height / 2
				const halfWidth = node.width / 2

				const [[c0, s0, x], [s1, c1, y]] = node.absoluteTransform
				const matrix = [
					[c0, s0, x + halfWidth * c0 + halfHeight * s0],
					[s1, c1, y + halfWidth * s1 + halfHeight * c1]
				]

				// the coordinates of the corners of the rectangle
				const XY = {
					x: [1, -1, 1, -1],
					y: [1, -1, -1, 1]
				}

				// fill in
				for (let i = 0; i <= 3; i++) {
					const a = applyMatrixToPoint(matrix, [
						XY.x[i] * halfWidth,
						XY.y[i] * halfHeight
					])
					XY.x[i] = a[0]
					XY.y[i] = a[1]
				}

				XY.x.sort((a, b) => a - b)
				XY.y.sort((a, b) => a - b)

				rez.x.push(XY.x[0])
				rez.y.push(XY.y[0])
				rez.x2.push(XY.x[3])
				rez.y2.push(XY.y[3])
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
