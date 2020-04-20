import { createFigma } from 'figma-api-stub'
import { getAbsolutePosition } from '../src'

const GAP = 50
const figma = createFigma({})
const pageNode = figma.createPage()
const frameNode1 = figma.createFrame()
const frameNode2 = figma.createFrame()
const rectangleNode = figma.createRectangle()
const textNode = figma.createText()
const groupNode = figma.group([rectangleNode, textNode], pageNode)
frameNode2.appendChild(groupNode)
frameNode1.appendChild(frameNode2)
pageNode.appendChild(frameNode1)

describe('getAbsolutePosition', () => {
    frameNode1.x = 0
    frameNode1.y = 0
    frameNode2.x = 0
    frameNode2.y = 0
    groupNode.x = 0
    groupNode.y = 0
    rectangleNode.x = 0
    rectangleNode.y = 0
    textNode.x = 0
    textNode.y = 0
	test('"x" asix calculations for zero values', () => {
		expect(getAbsolutePosition(textNode, 'x')).toBe(0)
	})
	test('"x" asix calculations for custom values', () => {
        frameNode2.x = GAP
        textNode.x = GAP
		expect(getAbsolutePosition(textNode, 'x')).toBe(GAP*2)
	})
	test('"x" asix calculations should ignore GroupNode position', () => {
        frameNode2.x = GAP
        groupNode.x = GAP
        textNode.x = GAP
		expect(getAbsolutePosition(textNode, 'x')).toBe(GAP*2)
	})
	test('"x" asix calculations should ignore top level node position', () => {
        frameNode1.x = GAP
        frameNode2.x = GAP
        textNode.x = GAP
		expect(getAbsolutePosition(textNode, 'x')).toBe(GAP*2)
	})
	test('"y" asix calculations for zero values', () => {
		expect(getAbsolutePosition(textNode, 'y')).toBe(0)
	})
	test('"y" asix calculations for zero values', () => {
        frameNode2.y = GAP
        textNode.y = GAP
		expect(getAbsolutePosition(textNode, 'y')).toBe(GAP*2)
	})
	test('"y" asix calculations should ignore GroupNode position', () => {
        frameNode2.y = GAP
        textNode.y = GAP
		expect(getAbsolutePosition(textNode, 'y')).toBe(GAP*2)
	})
	test('"y" asix calculations should ignore top level node position', () => {
        frameNode1.y = GAP
        frameNode2.y = GAP
        textNode.y = GAP
		expect(getAbsolutePosition(textNode, 'y')).toBe(GAP*2)
	})
})
