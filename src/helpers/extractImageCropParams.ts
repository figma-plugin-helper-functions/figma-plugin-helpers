import matrixInverse from 'matrix-inverse'
import { applyMatrixToPoint } from './applyMatrixToPoint'

/**
 * This method can extract the image crop rotation, scale (/size) and position.
 *
 * @param shapeWidth
 * @param shapeHeight
 * @param t
 */
export function extractImageCropParams(shapeWidth: number, shapeHeight: number, t: Transform) {
	const transform = t.length === 2 ? [...t, [0, 0, 1]] : [...t]
	const mxInv = matrixInverse(transform)
	const points = [
		[0, 0],
		[1, 0],
		[1, 1],
		[0, 1]
	].map((p) => applyMatrixToPoint(mxInv, p))
	const angle = Math.atan2(points[1][1] - points[0][1], points[1][0] - points[0][0])
	const sx = Math.sqrt(
		Math.pow(points[1][0] - points[0][0], 2) + Math.pow(points[1][1] - points[0][1], 2)
	)
	const sy = Math.sqrt(
		Math.pow(points[2][0] - points[1][0], 2) + Math.pow(points[2][1] - points[1][1], 2)
	)
	return {
		rotation: angle * (180 / Math.PI),
		scale: [sx, sy],
		size: [sx * shapeWidth, sy * shapeHeight],
		position: [-points[0][0] * shapeWidth, -points[0][1] * shapeHeight]
	}
}
