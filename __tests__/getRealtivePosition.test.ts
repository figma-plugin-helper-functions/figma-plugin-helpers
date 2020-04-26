import { set } from 'lodash'
import { createFigma } from 'figma-api-stub'
import { getRealtivePosition } from '../src'

const GAP = 50
const X = 'absoluteTransform[0][2]'
const Y = 'absoluteTransform[1][2]'
const figma = createFigma({})
const pageNode = figma.createPage()
const frameNode1 = figma.createFrame()
const frameNode2 = figma.createFrame()
const frameNode3 = figma.createFrame()
const frameNode4 = figma.createFrame()
const rectangleNode = figma.createRectangle()
const textNode = figma.createText()
const groupNode = figma.group([rectangleNode, textNode], pageNode)
frameNode4.appendChild(groupNode)
frameNode3.appendChild(frameNode4)
frameNode2.appendChild(frameNode3)
frameNode1.appendChild(frameNode2)
pageNode.appendChild(frameNode1)

describe('getRealtivePosition', () => {
	beforeEach(() => {
		set(frameNode1, X, 0)
		set(frameNode1, Y, 0)
		set(frameNode2, X, 0)
		set(frameNode2, Y, 0)
		set(frameNode3, X, 0)
		set(frameNode3, Y, 0)
		set(frameNode4, X, 0)
		set(frameNode4, Y, 0)
		set(groupNode, X, 0)
		set(groupNode, Y, 0)
		set(rectangleNode, X, 0)
		set(rectangleNode, Y, 0)
		set(textNode, X, 0)
		set(textNode, Y, 0)
	})

	test('calculations for zero values', () => {
		expect(getRealtivePosition(textNode)).toEqual({ x: 0, y: 0 })
	})
	test('ignore positions of nodes between targets', () => {
		set(frameNode2, X, GAP * 100)
		set(frameNode3, X, GAP * 50)
		set(frameNode4, X, GAP * 25)
		set(textNode, X, GAP)
		set(frameNode2, Y, GAP * 100)
		set(frameNode3, Y, GAP * 50)
		set(frameNode4, Y, GAP * 25)
		set(textNode, Y, GAP * 2)
		expect(getRealtivePosition(textNode)).toEqual({ x: GAP, y: GAP * 2 })
	})
	test('calculations should ignore top level node position', () => {
		set(frameNode1, X, GAP)
		set(textNode, X, GAP * 3)
		set(frameNode1, Y, GAP)
		set(textNode, Y, GAP * 6)
		expect(getRealtivePosition(textNode)).toEqual({ x: GAP * 3 - GAP, y: GAP * 6 - GAP })
	})
	test('calculations with provided parent', () => {
		set(frameNode2, X, GAP * 100)
		set(frameNode3, X, GAP * 50)
		set(frameNode4, X, GAP * 25)
		set(textNode, X, GAP)
		set(frameNode2, Y, GAP * 100)
		set(frameNode3, Y, GAP * 50)
		set(frameNode4, Y, GAP * 25)
		set(textNode, Y, GAP * 2)
		expect(getRealtivePosition(textNode, frameNode3)).toEqual({
			x: GAP * 50 - GAP,
			y: GAP * 50 - GAP * 2
		})
	})
})
