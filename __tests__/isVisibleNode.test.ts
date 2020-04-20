import { createFigma } from 'figma-api-stub'
import { isVisibleNode } from '../src'

const figma = createFigma({})
const pageNode = figma.createPage()
const frameNode = figma.createFrame()
const textNode = figma.createText()
frameNode.appendChild(textNode)
pageNode.appendChild(frameNode)

describe('isVisibleNode', () => {
	test('visible node returns "true"', () => {
		textNode.visible = true
		frameNode.visible = true
		expect(isVisibleNode(textNode)).toBe(true)
	})
	test('returns "false" if node is invisible', () => {
		textNode.visible = false
		expect(isVisibleNode(textNode)).toBe(false)
	})
	test('returns "false" if one of parents is invisible', () => {
		textNode.visible = true
		frameNode.visible = false
		expect(isVisibleNode(textNode)).toBe(false)
	})
})
