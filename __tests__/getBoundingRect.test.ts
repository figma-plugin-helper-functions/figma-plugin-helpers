import { set } from 'lodash'
import { createFigma } from 'figma-api-stub'
import { getBoundingRect } from '../src'

const figma = createFigma({})
const pageNode = figma.createPage()
const frameNode1 = figma.createFrame()
const frameNode2 = figma.createFrame()
pageNode.appendChild(frameNode1)
pageNode.appendChild(frameNode2)

describe('getRelativePosition negative tests', () => {
	test("shouldn't fail if node haven't required properties", () => {
		expect(getBoundingRect([frameNode1, frameNode2])).toEqual({
			height: -Infinity,
			width: -Infinity,
			x: Infinity,
			x2: -Infinity,
			y: Infinity,
			y2: -Infinity
		})
	})
})

describe('getRelativePosition positive tests', () => {
	beforeEach(() => {
		set(frameNode1, 'absoluteTransform', [
			[0, 0, 0],
			[0, 0, 0]
		])
		set(frameNode1, 'height', 100)
		set(frameNode1, 'width', 100)
		set(frameNode2, 'absoluteTransform', [
			[0, 0, 10],
			[0, 0, 20]
		])
		set(frameNode2, 'height', 200)
		set(frameNode2, 'width', 200)
	})

	test("shouldn't fail if node have all required properties", () => {
		expect(getBoundingRect([frameNode1, frameNode2])).toEqual({
			height: 20,
			width: 10,
			x: 0,
			x2: 10,
			y: 0,
			y2: 20
		})
	})
})
