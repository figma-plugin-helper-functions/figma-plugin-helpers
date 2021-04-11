/**
 * This helper will check font and set fallback before set characters to node. Useful to work with TextNode content changes.
 * For example:
 * ```diff
 * const text = "New text for label";
 * const labelNode = figma.currentPage.findOne((el) => el.type === "TEXT");
 * - await figma.loadFontAsync({
 * -    family: labelNode.fontName.family,
 * -    style: labelNode.fontName.style
 * - })
 * - labelNode.characters = text;
 * + await setCharacters(labelNode, text);
 * ```
 *
 * Provided example doesn't handle many annoying cases like, not existed or multiple fonts, which expand code a lot. `setCharacters` cover this cases and reducing noise.
 *
 * @param node Target node to set characters
 * @param characters String of characters to set
 * @param options Parser options
 * @param options.fallbackFont Font that will be applied to target node, if original will fail to load. By default is "Roboto Regular"
 * @param options.smartStrategy Parser stragtegy, that allows to set font family and styles to characters in more flexible way
 */

import { uniqBy } from 'lodash'

interface FontLinearItem {
	family: string
	style: string
	start?: number
	delimiter: '\n' | ' '
}

export const setCharacters = async (
	node: TextNode,
	characters: string,
	options?: {
		smartStrategy?: 'prevail' | 'strict' | 'experimental'
		fallbackFont?: FontName
	}
): Promise<boolean> => {
	const fallbackFont = options?.fallbackFont || {
		family: 'Roboto',
		style: 'Regular'
	}
	try {
		if (node.fontName === figma.mixed) {
			if (options?.smartStrategy === 'prevail') {
				const fontHashTree: { [key: string]: number } = {}
				for (let i = 1; i < node.characters.length; i++) {
					const charFont = node.getRangeFontName(i - 1, i) as FontName
					const key = `${charFont.family}::${charFont.style}`
					fontHashTree[key] = fontHashTree[key] ? fontHashTree[key] + 1 : 1
				}
				const prevailedTreeItem = Object.entries(fontHashTree).sort(
					(a, b) => b[1] - a[1]
				)[0]
				const [family, style] = prevailedTreeItem[0].split('::')
				const prevailedFont = {
					family,
					style
				} as FontName
				await figma.loadFontAsync(prevailedFont)
				node.fontName = prevailedFont
			} else if (options?.smartStrategy === 'strict') {
				return setCharactersWithStrictMatchFont(node, characters, fallbackFont)
			} else if (options?.smartStrategy === 'experimental') {
				return setCharactersWithSmartMatchFont(node, characters, fallbackFont)
			} else {
				const firstCharFont = node.getRangeFontName(0, 1) as FontName
				await figma.loadFontAsync(firstCharFont)
				node.fontName = firstCharFont
			}
		} else {
			await figma.loadFontAsync({
				family: node.fontName.family,
				style: node.fontName.style
			})
		}
	} catch (err) {
		console.warn(
			`Failed to load "${node.fontName['family']} ${node.fontName['style']}" font and replaced with fallback "${fallbackFont.family} ${fallbackFont.style}"`,
			err
		)
		await figma.loadFontAsync(fallbackFont)
		node.fontName = fallbackFont
	}
	try {
		node.characters = characters
		return true
	} catch (err) {
		console.warn(`Failed to set characters. Skipped.`, err)
		return false
	}
}

const setCharactersWithStrictMatchFont = async (
	node: TextNode,
	characters: string,
	fallbackFont?: FontName
): Promise<boolean> => {
	const fontHashTree: { [key: string]: string } = {}
	for (let i = 1; i < node.characters.length; i++) {
		const startIdx = i - 1
		const startCharFont = node.getRangeFontName(startIdx, i) as FontName
		const startCharFontVal = `${startCharFont.family}::${startCharFont.style}`
		while (i < node.characters.length) {
			i++
			const charFont = node.getRangeFontName(i - 1, i) as FontName
			if (startCharFontVal !== `${charFont.family}::${charFont.style}`) {
				break
			}
		}
		fontHashTree[`${startIdx}_${i}`] = startCharFontVal
	}
	await figma.loadFontAsync(fallbackFont)
	node.fontName = fallbackFont
	node.characters = characters
	console.log(fontHashTree)
	await Promise.all(
		Object.keys(fontHashTree).map(async (range) => {
			console.log(range, fontHashTree[range])
			const [start, end] = range.split('_')
			const [family, style] = fontHashTree[range].split('::')
			const matchedFont = {
				family,
				style
			} as FontName
			await figma.loadFontAsync(matchedFont)
			return node.setRangeFontName(Number(start), Number(end), matchedFont)
		})
	)
	return true
}

const getDelimiterPos = (
	str: string,
	delimiter: string,
	startIdx = 0,
	endIdx: number = str.length
): [number, number][] => {
	const indices = []
	let temp = startIdx
	for (let i = startIdx; i < endIdx; i++) {
		if (str[i] === delimiter && i + startIdx !== endIdx && temp !== i + startIdx) {
			indices.push([temp, i + startIdx])
			temp = i + startIdx + 1
		}
	}
	temp !== endIdx && indices.push([temp, endIdx])
	return indices.filter(Boolean)
}

const buildLinearOrder = (node: TextNode) => {
	const fontTree: FontLinearItem[] = []
	const newLinesPos = getDelimiterPos(node.characters, '\n')
	newLinesPos.forEach(([newLinesRangeStart, newLinesRangeEnd], n) => {
		const newLinesRangeFont = node.getRangeFontName(newLinesRangeStart, newLinesRangeEnd)
		if (newLinesRangeFont === figma.mixed) {
			const spacesPos = getDelimiterPos(
				node.characters,
				' ',
				newLinesRangeStart,
				newLinesRangeEnd
			)
			spacesPos.forEach(([spacesRangeStart, spacesRangeEnd], s) => {
				const spacesRangeFont = node.getRangeFontName(spacesRangeStart, spacesRangeEnd)
				if (spacesRangeFont === figma.mixed) {
					const spacesRangeFont = node.getRangeFontName(
						spacesRangeStart,
						spacesRangeStart[0]
					) as FontName
					fontTree.push({
						start: spacesRangeStart,
						delimiter: ' ',
						family: spacesRangeFont.family,
						style: spacesRangeFont.style
					})
				} else {
					fontTree.push({
						start: spacesRangeStart,
						delimiter: ' ',
						family: spacesRangeFont.family,
						style: spacesRangeFont.style
					})
				}
			})
		} else {
			fontTree.push({
				start: newLinesRangeStart,
				delimiter: '\n',
				family: newLinesRangeFont.family,
				style: newLinesRangeFont.style
			})
		}
	})
	return fontTree
		.sort((a, b) => +a.start - +b.start)
		.map(({ family, style, delimiter }) => ({ family, style, delimiter }))
}

const setCharactersWithSmartMatchFont = async (
	node: TextNode,
	characters: string,
	fallbackFont?: FontName
): Promise<boolean> => {
	const rangeTree = buildLinearOrder(node)
	const fontsToLoad = uniqBy(rangeTree, ({ family, style }) => `${family}::${style}`).map(
		({ family, style }): FontName => ({
			family,
			style
		})
	)

	await Promise.all([...fontsToLoad, fallbackFont].map(figma.loadFontAsync))

	node.fontName = fallbackFont
	node.characters = characters

	let prevPos = 0
	rangeTree.forEach(({ family, style, delimiter }) => {
		if (prevPos < node.characters.length) {
			const delimeterPos = node.characters.indexOf(delimiter, prevPos)
			const endPos = delimeterPos > prevPos ? delimeterPos : node.characters.length
			const matchedFont = {
				family,
				style
			}
			node.setRangeFontName(prevPos, endPos, matchedFont)
			prevPos = endPos + 1
		}
	})
	return true
}
