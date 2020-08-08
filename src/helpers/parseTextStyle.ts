import { isEqual, cloneDeep, uniqWith } from 'lodash'
import getAllFonts from './getAllFonts'
import loadFonts from './loadFonts'

const styleFonts: FontStyleNames[] = [
	'fontSize',
	'fontName',
	'textCase',
	'textDecoration',
	'letterSpacing',
	'lineHeight',
	'fills',
	'textStyleId',
	'fillStyleId'
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

function parseTextStyle(
	node: TextNode,
	start = 0,
	end?: number,
	styleName?: FontStyleNames[]
): LetterStyle[] {
	if (!end) end = node.characters.length
	if (!styleName) styleName = styleFonts

	if (end <= start) {
		console.error('Start must be greater than end')
		return []
	}

	// string substring, defined styles
	const styleMap = []

	// a composing string of a specific style
	let textStyle: LetterStyle

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
			if (isEqualLetterStyle(letter, textStyle)) {
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

function splitTextStyleIntoLines(
	textStyle: LetterStyle[],
	removeNewlineCharacters = false,
	removeEmptylines = false
) {
	let line: LineStyle = []
	let lines: LineStyle[] = []
	const re = new RegExp('(.+|(?<=\n)(.?)(?=$))(\n|\u2028)?|(\n|\u2028)', 'g')
	const re2 = new RegExp('\n|\u2028')

	textStyle.forEach((style, index) => {
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

				style = cloneDeep(style)
				style.characters = last

				if (last === '') {
					if (!textStyle[index + 1]) {
						// last line final
						lines.push([style])
					} // else false end of text
				} else {
					// does not end
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
			const style = l[l.length - 1]
			style.characters = style.characters.replace(re2, '')
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
	Inverse function of splitTextStyleIntoLines.
	The addNewlineCharacters parameter is responsible for whether you need to add a newline character at the end of each line
*/

function joinTextLinesStyles(
	textStyle: LineStyle[],
	addNewlineCharacters: boolean | '\n' | '\u2028' = false
) {
	const tStyle = cloneDeep(textStyle)
	let newline = ''

	switch (typeof addNewlineCharacters) {
		case 'boolean':
			if (addNewlineCharacters) newline = '\n'
			break

		case 'string':
			newline = addNewlineCharacters
			break
	}

	// adding new line characters
	if (addNewlineCharacters && newline) {
		tStyle.forEach((style, i) => {
			if (i !== tStyle.length - 1) style[style.length - 1].characters += newline
		})
	}

	// join
	const line = tStyle.shift()
	tStyle.forEach((style) => {
		const fitst = style.shift()

		if (isEqualLetterStyle(fitst, line[line.length - 1])) {
			// the style of the beginning of the line differs from the end of the style of the text being compiled
			line[line.length - 1].characters += fitst.characters
		} else {
			line.push(fitst)
		}

		if (style.length) line.push(...style)
	})

	return line
}

/*
	Apply the text styles obtained from parseTextStyle to the text node.
	The second parameter can be passed a text node, the text of which will be changed.
*/

async function applyTextStyleToTextNode(
	textStyle: LetterStyle[],
	textNode?: TextNode,
	isLoadFonts = true
) {
	if (isLoadFonts) {
		let fonts = [
			{
				family: 'Roboto',
				style: 'Regular'
			}
		]

		if (textStyle[0].fontName) {
			fonts.push(...textStyle.map((e) => e.fontName))
		}

		if (textNode) {
			fonts.push(...getAllFonts([textNode]))
		}

		fonts = uniqWith(fonts, isEqual)
		await loadFonts(fonts)
	}

	if (!textNode) textNode = figma.createText()
	textNode.characters = textStyle.reduce((str, style) => {
		return str + style.characters
	}, '')

	let n = 0
	textStyle.forEach((style) => {
		const L = style.characters.length
		if (L) {
			for (const key in style) {
				if (key !== 'characters') {
					const name = key.replace(/^(.)/g, ($1) => $1.toUpperCase())
					textNode['setRange' + name](n, n + L, style[key])
				}
			}
			n += L
		}
	})

	return textNode
}

/*
	Replacing text in textStyle
	If the passed text is shorter than in styles, the extra styles will be removed.
	If the passed text is longer than the styles, the overflow text will get the style of the last character.
*/

function changeCharactersTextStyle(textStyle: LetterStyle[], characters: string) {
	textStyle = cloneDeep(textStyle)

	let n = 0
	const length = textStyle.length - 1
	const charactersLength = characters.length
	for (let i = 0; i <= length; i++) {
		const s = textStyle[i]
		let l = s.characters.length

		// if passed text is longer than text in styles
		if (i == length) l = charactersLength

		s.characters = characters.slice(n, n + l)
		n += l

		if (n > charactersLength) {
			// new text is shorter than text in styles
			textStyle = textStyle.splice(0, i + 1)
			continue
		}
	}

	return textStyle
}

/*
	Function for changing properties of TextStyle. 
	The beforeValue parameter allows you to specify the value in which the property to be changed should be.
*/

function changeTextStyle(
	textStyle: LetterStyle[],
	styleName: 'fontSize',
	newValue: number,
	beforeValue?: number
)
function changeTextStyle(
	textStyle: LetterStyle[],
	styleName: 'fontName',
	newValue: FontName,
	beforeValue?: FontName
)
function changeTextStyle(
	textStyle: LetterStyle[],
	styleName: 'textCase',
	newValue: TextCase,
	beforeValue?: TextCase
)
function changeTextStyle(
	textStyle: LetterStyle[],
	styleName: 'textDecoration',
	newValue: TextDecoration,
	beforeValue?: TextDecoration
)
function changeTextStyle(
	textStyle: LetterStyle[],
	styleName: 'letterSpacing',
	newValue: LetterSpacing,
	beforeValue?: LetterSpacing
)
function changeTextStyle(
	textStyle: LetterStyle[],
	styleName: 'lineHeight',
	newValue: LineHeight,
	beforeValue?: LineHeight
)
function changeTextStyle(
	textStyle: LetterStyle[],
	styleName: 'fills',
	newValue: Paint[],
	beforeValue?: Paint[]
)
function changeTextStyle(
	textStyle: LetterStyle[],
	styleName: 'textStyleId' | 'fillStyleId',
	newValue: string,
	beforeValue?: string
)
function changeTextStyle(
	textStyle: LetterStyle[],
	styleName: FontStyleNames,
	newValue: any,
	beforeValue?: any
) {
	textStyle = cloneDeep(textStyle)

	textStyle.forEach((style) => {
		if (
			beforeValue === undefined ||
			(beforeValue !== undefined && isEqual(style[styleName], beforeValue))
		) {
			;(style as any)[styleName] = newValue
		}
	})

	return textStyle
}

/*comparing character styles to the styles of the composing substring*/
function isEqualLetterStyle(letter: LetterStyle, textStyle: LetterStyle): boolean {
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

export {
	parseTextStyle,
	splitTextStyleIntoLines,
	joinTextLinesStyles,
	applyTextStyleToTextNode,
	changeCharactersTextStyle,
	changeTextStyle
}
