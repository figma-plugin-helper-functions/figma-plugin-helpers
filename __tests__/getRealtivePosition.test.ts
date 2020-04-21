import { createFigma } from 'figma-api-stub'
import { getRealtivePosition, isFrameNode, getNodeIndex } from '../src'

const GAP = 50
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
const frames = [frameNode1, frameNode2, frameNode3, frameNode4]
frames.forEach((n, i, arr) => {
	n.x = 0
	n.y = 0
	n.name = `frameNode${i + 1}`
	arr[Math.max(i - 1, 0)].appendChild(n)
})
pageNode.appendChild(frameNode1)

describe('getRealtivePosition', () => {
	groupNode.x = 0
	groupNode.y = 0
	rectangleNode.x = 0
	rectangleNode.y = 0
	textNode.x = 0
	textNode.y = 0
	test('"x" asix calculations for zero values', () => {
		expect(getRealtivePosition(textNode, 'x')).toBe(0)
	})
	test('"x" asix calculations for custom values', () => {
		frameNode2.x = GAP
		textNode.x = GAP
		expect(getRealtivePosition(textNode, 'x')).toBe(GAP * 2)
	})
	test('"x" asix calculations should ignore GroupNode position', () => {
		frameNode2.x = GAP
		groupNode.x = GAP
		textNode.x = GAP
		expect(getRealtivePosition(textNode, 'x')).toBe(GAP * 2)
	})
	test('"x" asix calculations should ignore top level node position', () => {
		frameNode1.x = GAP
		frameNode2.x = GAP
		textNode.x = GAP
		expect(getRealtivePosition(textNode, 'x')).toBe(GAP * 2)
	})
	test('"x" asix calculations with condition', () => {
		frameNode2.x = GAP
		textNode.x = GAP 
		expect(getRealtivePosition(textNode, 'x', (node) => node.name === 'frameNode3')).toBe(GAP)
	})
	test('"y" asix calculations for zero values', () => {
		expect(getRealtivePosition(textNode, 'y')).toBe(0)
	})
	test('"y" asix calculations for zero values', () => {
		frameNode2.y = GAP
		textNode.y = GAP
		expect(getRealtivePosition(textNode, 'y')).toBe(GAP * 2)
	})
	test('"y" asix calculations should ignore GroupNode position', () => {
		frameNode2.y = GAP
		textNode.y = GAP
		expect(getRealtivePosition(textNode, 'y')).toBe(GAP * 2)
	})
	test('"y" asix calculations should ignore top level node position', () => {
		frameNode1.y = GAP
		frameNode2.y = GAP
		textNode.y = GAP
		expect(getRealtivePosition(textNode, 'y')).toBe(GAP * 2)
	})
	test('"y" asix calculations with condition', () => {
		frameNode2.y = GAP
		textNode.y = GAP 
		expect(getRealtivePosition(textNode, 'y', (node) => node.name === 'frameNode3')).toBe(GAP)
	})
})
