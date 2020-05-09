import { createFigma } from 'figma-api-stub'
import { hasChildren } from '../src'

const figma = createFigma({})
const pageNode = figma.createPage()
const frameNode = figma.createFrame()
const textNode = figma.createText()
frameNode.appendChild(textNode)
pageNode.appendChild(frameNode)

describe('hasChildren', () => {
    test('return true for node with children', () => {
        expect(hasChildren(pageNode)).toBe(true)
        expect(hasChildren(frameNode)).toBe(true)
    })
    test('return false for node without children', () => {
        expect(hasChildren(textNode)).toBe(false)
    })
})