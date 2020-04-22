import { 
	figmaRGBToWebRGB,
	webRGBToFigmaRGB,
	figmaRGBToHex,
	hexToFigmaRGB
 } from '../src'


const figmaRGB = { r: 0, g: 0.1, b: 1 }
const figmaRGBA = { r: 0, g: 0.1, b: 1, a: .5 }

const figmaRGB_from_webRGB = { r: 0, g: 0.10196078431372549, b: 1 }
const figmaRGBA_from_webRGBA = { r: 0, g: 0.10196078431372549, b: 1, a: 0.5 }

const figmaRGB_from_HEX = figmaRGB_from_webRGB
const figmaRGBA_from_HEXA = { r: 0, g: 0.10196078431372549, b: 1, a: 0.5019607843137255 }

const figmaRGB_from_HEX_min = { r: 0, g: 0.6666666666666666, b: 1 }

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
		expect(webRGBToFigmaRGB(webRGB)).toEqual(figmaRGB_from_webRGB)
	})
	test('webRGBA to figmaRGBA', () => {
		expect(webRGBToFigmaRGB(webRGBA)).toEqual(figmaRGBA_from_webRGBA)
	})
	test('figmaRGB to HEX', () => {
		expect(figmaRGBToHex(figmaRGB)).toBe(HEX)
	})
	test('figmaRGBA to HEXa', () => {
		expect(figmaRGBToHex(figmaRGBA)).toBe(HEXa)
	})
	test('HEX to figmaRGB', () => {
		expect(hexToFigmaRGB(HEX)).toEqual(figmaRGB_from_webRGB)
	})
	test('HEXa to figmaRGBA', () => {
		expect(hexToFigmaRGB(HEXa)).toEqual(figmaRGBA_from_HEXA)
	})
	test('001aff to figmaRGB', () => {
		expect(hexToFigmaRGB("001aff")).toEqual(figmaRGB_from_webRGB)
	})
	test('#0af to figmaRGB', () => {
		expect(hexToFigmaRGB("#0af")).toEqual(figmaRGB_from_HEX_min)
	})
	test('0af to figmaRGB', () => {
		expect(hexToFigmaRGB("0af")).toEqual(figmaRGB_from_HEX_min)
	})
})
