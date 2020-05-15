import matrixInverse from 'matrix-inverse';
import { applyMatrixToPoint } from './applyMatrixToPoint';

/**
 * This method can extract the x and y positions of the start and end of the linear gradient
 * (scale is not important here)
 * 
 * @param shapeWidth number
 * @param shapeHeight number
 * @param t Transform
 */
export function extractLinearGradientParamsFromTransform(shapeWidth: number, shapeHeight: number, t: Transform) {
	const transform = t.length === 2 ? [...t, [0, 0, 1]] : [...t];
	const mxInv = matrixInverse(transform);
	const startEnd = [[0, .5], [1, .5]].map(p => applyMatrixToPoint(mxInv, p));
	return {
		start: [startEnd[0][0] * shapeWidth, startEnd[0][1] * shapeHeight],
		end: [startEnd[1][0] * shapeWidth, startEnd[1][1] * shapeHeight],
	}
}