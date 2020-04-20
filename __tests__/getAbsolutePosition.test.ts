import { createFigma } from 'figma-api-stub'
import { getAbsolutePosition } from '../src'

// const GAP = 50
const figma = createFigma({})
const pageNode = figma.createPage()
const frameNode = figma.createFrame()
const rectangleNode = figma.createRectangle()
const textNode = figma.createText()
const groupNode = figma.group([rectangleNode, textNode], pageNode)
frameNode.appendChild(groupNode)
pageNode.appendChild(frameNode)

describe('getAbsolutePosition', () => {
	test('"x" asix calculations for zero values', () => {
        frameNode.x = 0
        groupNode.x = 0
        rectangleNode.x = 0
        textNode.x = 0
		expect(getAbsolutePosition(textNode, 'x')).toBe(0)
	})
	// test('"x" asix calculations for custom values', () => {
    //     frameNode.x = GAP
    //     groupNode.x = GAP
    //     rectangleNode.x = GAP
    //     textNode.x = GAP
	// 	expect(getAbsolutePosition(textNode, 'x')).toBe(GAP*4)
	// })
	test('"y" asix calculations for zero values', () => {
        frameNode.y = 0
        groupNode.y = 0
        rectangleNode.y = 0
        textNode.y = 0
		expect(getAbsolutePosition(textNode, 'y')).toBe(0)
	})
})
