import getAllFonts from './getAllFonts'
import loadFonts from './loadFonts'

/**
 * this function allows you to load only unique fonts asynchronously
 */
export default async function loadUniqueFonts(textNodes: Array<TextNode>) {
	const fonts = getAllFonts(textNodes)
	return loadFonts(fonts)
}
