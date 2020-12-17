import { copyPasteProps } from '../src'

describe('copyPasteNode', () => {
	test('copy compatible properties', () => {
		const source = {
			fills: 1,
			fillStyleId: 'soaowlqla',
			strokes: 1,
			notAllowed: 1
		}

		const target = {
			fills: 0,
			fillStyleId: '',
			strokes: 0,
			backgrounds: []
		}
		expect(copyPasteProps({ source, target })).toEqual({
			fills: 0,
			fillStyleId: 'soaowlqla',
			strokes: 1,
			backgrounds: []
		})
	})
	test('exclude certain properties from being copied', () => {
		const source = {
			fills: 1,
			fillStyleId: 'soaowlqla',
			strokes: 1,
			notAllowed: 1
		}

		const target = {
			fills: 0,
			fillStyleId: '',
			strokes: 0,
			backgrounds: []
		}
		expect(copyPasteProps({ source, target, exclude: ['strokes'] })).toEqual({
			fills: 0,
			fillStyleId: 'soaowlqla',
			strokes: 0,
			backgrounds: []
		})
	})
	test('only copy certain properties', () => {
		const source = {
			fills: 1,
			fillStyleId: 'soaowlqla',
			strokes: 1,
			notAllowed: 1
		}

		const target = {
			fills: 0,
			fillStyleId: '',
			strokes: 0,
			backgrounds: []
		}
		expect(copyPasteProps({ source, target, include: ['strokes'] })).toEqual({
			fills: 0,
			fillStyleId: '',
			strokes: 1,
			backgrounds: []
		})
	})
})
