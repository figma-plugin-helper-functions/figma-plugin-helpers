import { createFigma } from 'figma-api-stub'
import { findAll, isTextNode } from '../src'

const figma = createFigma({})
const pageNode = figma.createPage()
const frameNode = figma.createFrame()
const textNode1 = figma.createText()
const textNode2 = figma.createText()
const textNode3 = figma.createText()
frameNode.appendChild(textNode1)
frameNode.appendChild(textNode2)
frameNode.appendChild(textNode3)
pageNode.appendChild(frameNode)

describe('findAll', () => {
    test('return all nodes from deep dive', () => {
        const result = findAll(pageNode.children, isTextNode);
        expect(result.length).toEqual(3)
        expect(isTextNode(result[0])).toBe(true)
    })
})