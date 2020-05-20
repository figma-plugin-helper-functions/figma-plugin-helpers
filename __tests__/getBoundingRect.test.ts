import { createFigma } from 'figma-api-stub'
import { getBoundingRect } from '../src'

const figma = createFigma({})
const pageNode = figma.createPage()
const frameNode = figma.createFrame()
const rectangleNode1 = figma.createRectangle()
const rectangleNode2 = figma.createRectangle()

pageNode.appendChild(rectangleNode1)
pageNode.appendChild(rectangleNode2)
pageNode.appendChild(frameNode)

rectangleNode1.resize(100, 200)
rectangleNode2.resize(100, 100)
rectangleNode1.x = 0
rectangleNode1.y = 0
rectangleNode2.x = 0
rectangleNode2.y = 0



const rects = [
	{
		angle: 0,
		answe: {
			x: 0,
			y: 0,
			x2: 100,
			y2: 200,
			width: 100,
			height: 200
		},
	},
	{
		angle: -0,
		answe: {
			x: 0,
			y: 0,
			x2: 100,
			y2: 200,
			width: 100,
			height: 200
		},
	},
	{
		angle: 30,
		answe: {
			x: 0,
			y: -50.0000006730587,
			x2: 186.60254133597064,
			y2: 173.20507997970648,
			width: 186.60254133597064,
			height: 223.2050806527652
		},
	},
	{
		angle: 90,
		answe: {
			x: 0,
			y: -100,
			x2: 200,
			y2: 1.4210854715202004e-14,
			width: 200,
			height: 100.00000000000001
		},
	},
	{
		angle: 120,
		answe: {
			x: -50.00000067305873,
			y: -186.60254133597067,
			x2: 173.20507997970645,
			y2: 0,
			width: 223.2050806527652,
			height: 186.60254133597067
		},
	},
	{
		angle: 180,
		answe: {
			x: -100,
			y: -200,
			x2: 0,
			y2: 0,
			width: 100,
			height: 200
		},
	},
	{
		angle: -180,
		answe: {
			x: -100,
			y: -200,
			x2: 0,
			y2: 0,
			width: 100,
			height: 200
		},
	},
	{
		angle: -120,
		answe: {
			x: -223.2050806527652,
			y: -100.00000134611746,
			x2: 0,
			y2: 86.60253998985321,
			width: 223.2050806527652,
			height: 186.60254133597067
		},
	},
	{
		angle: -30,
		answe: {
			x: -100.0000013461174,
			y: 0,
			x2: 86.60253998985324,
			y2: 223.2050806527652,
			width: 186.60254133597064,
			height: 223.2050806527652
		},
	},
]

describe('getBoundingRect', () => {
	rects.forEach((item) => {
		test(`Rectangle on canvas at ${item.angle} degrees`, () => {
			rectangleNode1.rotation = item.angle
			expect(getBoundingRect(rectangleNode1)).toEqual(item.answe)
		})
	})


	// test('два различных повёрнутых прямоугольника на холсте', () => {
	// })
	// test('группа на холсте при 0 градусах', () => {
	// })
	// test('группа на холсте при 45 градусах', () => {
	// })
	// test('повёрнутый прямоугольник во фрейме', () => {
	// })
})
