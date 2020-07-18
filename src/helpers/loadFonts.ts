/**
 * this function asynchronously loads the passed fonts
 */
export default async function loadFonts(fonts: Array<FontName>) {
	const promises = fonts.map((font) => figma.loadFontAsync(font))
	await Promise.all(promises)
	return fonts
}
