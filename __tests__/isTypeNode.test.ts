import { createFigma } from 'figma-api-stub'
import {
	isComponentNode,
	isFrameNode,
	isGroupNode,
	isInstanceNode,
	isPageNode,
	isTextNode,
	isOneOfNodeType
} from '../src'


const figma = createFigma({})
const nodes = {
	COMPONENT: {
		method: isComponentNode,
		node: figma.createComponent()
	},
	FRAME: {
		method: isFrameNode,
		node: figma.createFrame()
	},
	PAGE: {
		method: isPageNode,
		node: figma.createPage()
	},
	TEXT: {
		method: isTextNode,
		node: figma.createText()
	},
	GROUP: {
		method: isGroupNode,
		node: figma.group([figma.createText()], figma.createPage())
	},
	INSTANCE: {
		method: isInstanceNode,
		node: figma.createComponent().createInstance()
	},
}

describe('type checks', () => {
	Object.keys(nodes).forEach((key, i, arr) => {
		test(`${key} type`, () => {
			const { method } = nodes[key]
			arr.forEach(el => {
				const { node } = nodes[el]
				expect(method(node)).toBe(key === el)
			})
		})
	})

	test('isOneOfNodeType', () => {
		expect(isOneOfNodeType(figma.createComponent(), ['COMPONENT'])).toBe(true)
		expect(isOneOfNodeType(figma.createComponent(), ['COMPONENT', 'TEXT'])).toBe(true)
		expect(isOneOfNodeType(figma.createComponent(), [])).toBe(false)
		expect(isOneOfNodeType(figma.createComponent(), ['TEXT', 'PAGE'])).toBe(false)
	})
})