import { get } from 'lodash'

interface UnitValueObj {
	value?: number
	unit: 'PIXELS' | 'PERCENT' | 'AUTO'
}

const stringValueToCss = (value: string) => {
	if (/right|bottom/i.test(value)) {
		return 'flex-end'
	} else if (/left|top/i.test(value)) {
		return 'flex-start'
	} else if (/center/i.test(value)) {
		return 'center'
	} else if (/lower/i.test(value)) {
		return 'lowercase'
	} else if (/upper/i.test(value)) {
		return 'uppercase'
	} else if (/title/i.test(value)) {
		return 'capitalize'
	} else {
		return 'none'
	}
}

const unitValueToCss = ({ unit, value }: UnitValueObj) => {
	if (unit === 'PERCENT') {
		return `${value}%`
	} else if (unit === 'PIXELS') {
		return `${value}px`
	} else {
		return 'auto'
	}
}

const isUnitValue = (obj: any): obj is UnitValueObj => {
	return obj.hasOwnProperty('unit')
}

const getStyleValue = (node: TextNode, key: string, exactString?: boolean) => {
	const value = get(node, key)
	if (value === undefined) {
		return null
	} else if (typeof value === 'string') {
		return exactString
			? value.toLowerCase().trim()
			: stringValueToCss(value.toLowerCase().trim())
	} else if (typeof value === 'number') {
		return `${value}px`
	} else if (isUnitValue(value)) {
		return unitValueToCss(value)
	} else {
		console.warn('Unexpected value: ', value)
	}
}

/**
 *  get CSS styles of TextNode
 */
export const getTextNodeCSS = (node: TextNode) => {
	return {
		position: 'absolute',
		top: getStyleValue(node, 'y'),
		left: getStyleValue(node, 'x'),
		width: getStyleValue(node, 'width'),
		height: getStyleValue(node, 'height'),
		display: 'flex',
		'justify-content': getStyleValue(node, 'textAlignHorizontal'),
		'align-items': getStyleValue(node, 'textAlignVertical'),

		'text-indent': getStyleValue(node, 'paragraphIndent'),
		'letter-spacing': getStyleValue(node, 'letterSpacing'),
		'line-height': getStyleValue(node, 'lineHeight'),
		'font-size': getStyleValue(node, 'fontSize'),
		'font-style': getStyleValue(node, 'fontName.style', true),
		'font-weight': getStyleValue(node, 'fontName.style', true),
		'text-decoration': getStyleValue(node, 'textDecoration', true),
		'text-transform': getStyleValue(node, 'textCase'),
		'font-family': `${getStyleValue(node, 'fontName.family', true)} ${getStyleValue(
			node,
			'fontName.style',
			true
		)}`
	}
}

// this file can be extended to support all node types
