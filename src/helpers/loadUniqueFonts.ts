import getAllFonts from './getAllFonts'

//this function allows you to load only unique fonts asynchronously
export default async function loadUniqueFonts(textNodes: Array<TextNode>) {
	const fonts = getAllFonts(textNodes)
	const promises = fonts.map((font) => figma.loadFontAsync(font))

	await Promise.all(promises)
	return fonts
}
