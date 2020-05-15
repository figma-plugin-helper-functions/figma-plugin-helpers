import matrixInverse from 'matrix-inverse';
import { applyMatrixToPoint } from './applyMatrixToPoint';

/**
 * This method can extract the rotation (in degrees), center point and radius for a radial or diamond gradient
 * 
 * @param shapeWidth 
 * @param shapeHeight 
 * @param t 
 */
export function extractRadialOrDiamondGradientParams(shapeWidth: number, shapeHeight: number, t: number[][]) {
	const transform = t.length === 2 ? [...t, [0, 0, 1]] : [...t];
	const mxInv = matrixInverse(transform);
	const centerPoint = applyMatrixToPoint(mxInv, [.5, .5]);
	const rxPoint = applyMatrixToPoint(mxInv, [1, .5]);
	const ryPoint = applyMatrixToPoint(mxInv, [0.5, 1]);
	const rx = Math.sqrt(Math.pow(rxPoint[0] - centerPoint[0], 2) + Math.pow(rxPoint[1] - centerPoint[1], 2));
	const ry = Math.sqrt(Math.pow(ryPoint[0] - centerPoint[0], 2) + Math.pow(ryPoint[1] - centerPoint[1], 2));
	const angle = Math.atan(
		(rxPoint[1] - centerPoint[1])
		/ (rxPoint[0] - centerPoint[0])
	) * (180 / Math.PI);
	return {
		rotation: angle,
		center: [centerPoint[0] * shapeWidth, centerPoint[1] * shapeHeight],
		radius: [rx * shapeWidth, ry * shapeHeight],
	}
}