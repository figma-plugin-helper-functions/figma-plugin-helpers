import { 
	figmaRGBToWebRGB,
	webRGBToFigmaRGB,
	figmaRGBToHex,
	hexToFigmaRGB
 } from '../src'


const figmaRGB = { r: 0, g: 0.1, b: 1 }
const figmaRGBA = { r: 0, g: 0.1, b: 1, a: .5 }

const webRGB: [number, number, number] = [0, 26, 255]
const webRGBA: [number, number, number, number] = [0, 26, 255, .5]

const HEX = "#001aff"
const HEXa = "#001aff80"

describe('convertColor', () => {
	test('figmaRGB to webRGB', () => {
		expect(figmaRGBToWebRGB(figmaRGB)).toEqual(webRGB)
	})
	test('figmaRGBA to webRGBA', () => {
		expect(figmaRGBToWebRGB(figmaRGBA)).toEqual(webRGBA)
	})
	test('webRGB to figmaRGB', () => {
		expect(webRGBToFigmaRGB(webRGB)).toEqual({ r: 0, g: 0.10196078431372549, b: 1 })
	})
	test('webRGBA to figmaRGBA', () => {
		expect(webRGBToFigmaRGB(webRGBA)).toEqual({ r: 0, g: 0.10196078431372549, b: 1, a: 0.5 })
	})
	test('figmaRGB to HEX', () => {
		expect(figmaRGBToHex(figmaRGB)).toBe(HEX)
	})
	test('figmaRGBA to HEXa', () => {
		expect(figmaRGBToHex(figmaRGBA)).toBe(HEXa)
	})
	test('HEX to figmaRGB', () => {
		expect(hexToFigmaRGB(HEX)).toEqual({ r: 0, g: 0.10196078431372549, b: 1 })
	})
	test('HEXa to figmaRGBA', () => {
		expect(hexToFigmaRGB(HEXa)).toEqual({ r: 0, g: 0.10196078431372549, b: 1, a: 0.5019607843137255 })
	})
	test('001aff to figmaRGB', () => {
		expect(hexToFigmaRGB("001aff")).toEqual({ r: 0, g: 0.10196078431372549, b: 1 })
	})
	test('#0af to figmaRGB', () => {
		expect(hexToFigmaRGB("#0af")).toEqual({ r: 0, g: 0.6666666666666666, b: 1 })
	})
	test('0af to figmaRGB', () => {
		expect(hexToFigmaRGB("0af")).toEqual({ r: 0, g: 0.6666666666666666, b: 1 })
	})
})
