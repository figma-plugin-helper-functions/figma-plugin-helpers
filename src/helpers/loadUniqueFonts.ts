import getAllFonts from './getAllFonts'

//this function allows you to load only unique fonts asynchronously
export default async function loadUniqueFonts(textNodes: Array<TextNode>) {
	let fonts = getAllFonts(textNodes)
	let promises = fonts.map((font) => figma.loadFontAsync(font))

	await Promise.all(promises)
	return fonts
}