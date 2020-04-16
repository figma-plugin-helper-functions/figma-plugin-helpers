import { createFigma } from 'figma-api-stub'
import { getTextNodeCSS } from '../src'

const GAP = 50;
const DEFAULT_CSS = {
	position: 'absolute',
	top: null,
	left: null,
	width: null,
	height: null,
	display: 'flex',
	'justify-content': null,
	'align-items': null,
	'text-indent': null,
	'letter-spacing': null,
	'line-height': null,
	'font-size': null,
	'font-style': 'regular',
	'font-weight': 'regular',
	'text-decoration': null,
	'text-transform': null,
	'font-family': 'roboto regular'
}

const figma = createFigma({})
const text = figma.createText()

describe('getCSSStyles', () => {
	test('default styles', () => {
		const css = getTextNodeCSS(text)
		expect(css).toEqual(DEFAULT_CSS);
    })
	test('top left styles', () => {
        text.x = GAP*2;
        text.y = GAP;
		const css = getTextNodeCSS(text);
		expect(css).toHaveProperty("top", `${GAP}px`);
		expect(css).toHaveProperty("left", `${GAP*2}px`);
	})
	test('width height styles', () => {
        text.resize(GAP, GAP*2);
		const css = getTextNodeCSS(text);
		expect(css).toHaveProperty("width", `${GAP}px`);
		expect(css).toHaveProperty("height", `${GAP*2}px`);
    })
	test('justify-content styles', () => {
        text.textAlignHorizontal = "RIGHT";
		const css = getTextNodeCSS(text);
		expect(css).toHaveProperty("justify-content", "flex-end");
    })
	test('align-items styles', () => {
        text.textAlignVertical = "CENTER";
		const css = getTextNodeCSS(text);
		expect(css).toHaveProperty("align-items", "center");
    })
    test('regular font styles', () => {
        const fontFamily = "my-font";
        const fontStyle = "regular";
        text.fontSize = GAP/2;
        text.fontName = {
            family: fontFamily,
            style: fontStyle
        };
        const css = getTextNodeCSS(text);
        expect(css).toHaveProperty("font-size", `${GAP/2}px`);
        expect(css).toHaveProperty("font-family", `${fontFamily} ${fontStyle}`);
        expect(css).toHaveProperty("font-weight", fontStyle);
        expect(css).toHaveProperty("font-style", fontStyle);
    })
    test('bold font styles', () => {
        const fontFamily = "my-font";
        const fontStyle = "bold";
        text.fontSize = GAP/2;
        text.fontName = {
            family: fontFamily,
            style: fontStyle
        };
        const css = getTextNodeCSS(text);
        expect(css).toHaveProperty("font-size", `${GAP/2}px`);
        expect(css).toHaveProperty("font-family", `${fontFamily} ${fontStyle}`);
        expect(css).toHaveProperty("font-weight", fontStyle);
        expect(css).toHaveProperty("font-style", fontStyle);
    })
    test('italic font styles', () => {
        const fontFamily = "my-font";
        const fontStyle = "italic";
        text.fontSize = GAP/2;
        text.fontName = {
            family: fontFamily,
            style: fontStyle
        };
        const css = getTextNodeCSS(text);
        expect(css).toHaveProperty("font-size", `${GAP/2}px`);
        expect(css).toHaveProperty("font-family", `${fontFamily} ${fontStyle}`);
        expect(css).toHaveProperty("font-weight", fontStyle);
        expect(css).toHaveProperty("font-style", fontStyle);
    })
    test('letter-spacing styles', () => {
        text.letterSpacing = {
            value: GAP/10,
            unit: "PIXELS"
        };
        const css = getTextNodeCSS(text);
        expect(css).toHaveProperty("letter-spacing", `${GAP/10}px`);
    })
    test('line-height styles', () => {
        text.lineHeight = {
            value: GAP/5,
            unit: "PIXELS"
        };
        const css = getTextNodeCSS(text);
        expect(css).toHaveProperty("line-height", `${GAP/5}px`);
    })
    test('text-indent styles', () => {
        text.paragraphIndent = GAP/2.5;
        const css = getTextNodeCSS(text);
        expect(css).toHaveProperty("text-indent", `${GAP/2.5}px`);
    })
    test('text-decoration styles', () => {
        text.textDecoration = "UNDERLINE";
        const css = getTextNodeCSS(text);
        expect(css).toHaveProperty("text-decoration", "underline");
    })
    test('text-transform styles', () => {
        text.textCase = "UPPER";
        const css = getTextNodeCSS(text);
        expect(css).toHaveProperty("text-transform", "uppercase");
    })
})
