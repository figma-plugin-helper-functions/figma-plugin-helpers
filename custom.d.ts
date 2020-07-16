interface Font {
	family: string
	style: string
}

declare module 'matrix-inverse' {
	const fn: <T extends number[] | number[][]>(m: T) => T
	export = fn
}

interface LetteStyle {
	characters: string
	fontSize?: number
	fontName?: FontName
	textCase?: TextCase
	textDecoration?: TextDecoration
	letterSpacing?: LetterSpacing
	lineHeight?: LineHeight
	fills?: Paint[]
	textStyleId?: string
	fillStyleId?: string
}

type FontStyleNames =
	| 'fontSize'
	| 'fontName'
	| 'textCase'
	| 'textDecoration'
	| 'letterSpacing'
	| 'lineHeight'
	| 'fills'
