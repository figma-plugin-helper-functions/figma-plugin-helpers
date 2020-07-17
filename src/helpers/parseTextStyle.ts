import { isEqual, cloneDeep, uniqWith } from 'lodash'
import loadFonts from './loadFonts'

const styleFonts: FontStyleNames[] = [
	'fontSize',
	'fontName',
	'textCase',
	'textDecoration',
	'letterSpacing',
	'lineHeight',
	'fills'
]

/*
	The function returns the text node styles, splitting them into different arrays, such as:
	[{
		characters: "...",
		... (styles)
	}, ...]

	---

	Returns styles for the entire text:
	parseTextStyle(textNode)
	
	Returns text styles from the 100th to the last character:
	parseTextStyle(textNode, 100)

	Returns styles for the entire text, but only with fontName and textDecoration:
	parseTextStyle(textNode, undefined, undefined, ["fontName", "textDecoration"])
*/

export function parseTextStyle(
	node: TextNode,
	start = 0,
	end?: number,
	styleName?: FontStyleNames[]
): LetteStyle[] {
	if (!end) end = node.characters.length
	if (!styleName) styleName = styleFonts

	if (end <= start) {
		console.error('Start must be greater than end')
		return []
	}

	// string substring, defined styles
	const styleMap = []

	// a composing string of a specific style
	let textStyle: LetteStyle

	// comparing character styles to the styles of the composing substring
	const isEqualLetterStyle = (letter: LetteStyle): boolean => {
		let is = true

		// iterating over font properties
		for (const key in letter) {
			if (key !== 'characters') {
				if (!isEqual(letter[key], textStyle[key])) {
					// property varies
					// stop searching
					is = false
					break
				}
			}
		}

		return is
	}

	const names = styleName.map((name) => {
		return name.replace(/^(.)/g, ($1) => $1.toUpperCase())
	})

	// splitting text into substrings by style

	for (let startIndex = start; startIndex < end; startIndex++) {
		const endIndex = startIndex + 1
		const letter = { characters: node.characters[startIndex] }

		// collection of styles
		names.forEach((n, i) => {
			letter[styleName[i]] = node['getRange' + n](startIndex, endIndex)
		})

		if (textStyle) {
			if (isEqualLetterStyle(letter)) {
				// the character has the same properties as the generated substring
				// add it to it
				textStyle.characters += letter.characters
			} else {
				// style properties are different
				styleMap.push(textStyle)
				// we start to form a new substring
				textStyle = letter
			}
		} else {
			// we start forming the first substring
			textStyle = letter
		}
	}

	styleMap.push(textStyle)
	return styleMap
}

/*
	Allows to split the styles obtained with parseTextStyle into lines based on newlines.

	If the removeNewlineCharacters parameter == true, the newline characters will be removed.
	RemoveEmptylines == true will remove empty lines.
*/

export function splitTextStyleIntoLines(
	textStyle: LetteStyle[],
	removeNewlineCharacters = false,
	removeEmptylines = false
) {
	let lines: LetteStyle[][] = []
	let line: LetteStyle[] = []
	const re = new RegExp('(\n|\u2028)|(.+)(\n|\u2028)?', 'g')
	const re2 = new RegExp('\n|\u2028')

	textStyle.forEach((style) => {
		if (re2.test(style.characters)) {
			const ls = style.characters.match(re)

			if (ls === null) {
				// text is missing

				line.push(style)
			} else if (ls.length === 1) {
				// the style text consists of 1 line

				line.push(style)
				lines.push(line)
				line = []
			} else {
				// multiple-line text

				style = cloneDeep(style)
				style.characters = ls.shift()
				line.push(style)
				lines.push(line)
				line = []

				const last = ls.pop()

				// dealing with internal text strings
				lines.push(
					...ls.map((e) => {
						style = cloneDeep(style)
						style.characters = e
						return [style]
					})
				)

				if (re2.test(last)) {
					// last line final
					style = cloneDeep(style)
					style.characters = last
					lines.push([style])
				} else {
					// does not end
					style = cloneDeep(style)
					style.characters = last
					line.push(style)
				}
			}
		} else {
			line.push(style)
		}
	})

	if (line.length) lines.push(line)

	// deleting newline characters
	if (removeNewlineCharacters) {
		lines.forEach((l) => {
			l.forEach((style) => {
				style.characters = style.characters.replace(re2, '')
			})
		})
	}

	// deleting empty lines
	if (removeEmptylines) {
		lines = lines.filter(
			(l) => l.filter((l) => l.characters.replace(re2, '') !== '').length !== 0
		)
	}

	return lines
}

/*
	Create a textNode from the text style obtained from the parseTextStyle
*/

export async function createTextNode(textStyle: LetteStyle[]) {
	let fonts = [
		{
			family: 'Roboto',
			style: 'Regular'
		}
	]

	if (textStyle[0].fontName) {
		fonts = textStyle.map((e) => e.fontName)
	}

	fonts = uniqWith(fonts, isEqual)
	await loadFonts(fonts)

	const textNode = figma.createText()
	textNode.characters = textStyle.reduce((str, style) => {
		return str + style.characters
	}, '')

	let n = 0
	textStyle.forEach((style) => {
		const L = style.characters.length
		for (const key in style) {
			if (key !== 'characters') {
				const name = key.replace(/^(.)/g, ($1) => $1.toUpperCase())
				textNode['setRange' + name](n, n + L, style[key])
			}
		}
		n += L
	})

	return textNode
}
