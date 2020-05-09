import { createFigma } from 'figma-api-stub'
import { findAll, findOne, isTextNode } from '../src'

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
    test('return all nodes from deep dive for all pages', () => {
        const result = findAll(figma.root.children, isTextNode);
        expect(result.length).toEqual(3)
        expect(isTextNode(result[0])).toBe(true)
    })
})

describe('findOne', () => {
    test('return node by condition', () => {
        const result = findOne(pageNode.children, (el) => el.id === textNode2.id);
        expect(result.id === textNode2.id).toBe(true)
    })
    test('return node by condition for all pages', () => {
        const result = findOne(figma.root.children, (el) => el.id === textNode2.id);
        expect(result.id === textNode2.id).toBe(true)
    })
})