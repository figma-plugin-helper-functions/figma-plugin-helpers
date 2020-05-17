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
 * + setCharacters(labelNode, text);
 * ```
 *
 * Provided example doesn't handle many annoying cases like, not existed or multiple fonts, which expand code a lot. `setCharacters` cover this cases and reducing noise.
 *
 * @param node - Target node to set characters
 * @param characters - String of characters to set
 * @param fallbackFont - Font that will be applied to target node, if original will fail to load. By default is "Roboto Regular"
 */

export const setCharacters = async (
	node: TextNode,
	characters: string,
	fallbackFont?: FontName
): Promise<boolean> => {
	fallbackFont = fallbackFont || {
		family: 'Roboto',
		style: 'Regular'
	}
	try {
		if (node.fontName === figma.mixed) {
			await figma.loadFontAsync(node.getRangeFontName(0, 1) as FontName)
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
