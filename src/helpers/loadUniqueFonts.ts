//this function allows you to load only unique fonts asynchronously
async function loadUniqueFonts(textArray: Array<TextNode>) {
    let fontsArray: Array<symbol> = []

    for (let textNode of textArray) {
        let len = textNode.characters.length
        for (let i = 0; i < len; i++) {
        let font = textNode.getRangeFontName(i, i+1)
        if (!fontsArray.some(item => item.family === font.family && item.style === font.style)) {
            fontsArray.push(font)
        }
        }
    }

    const promises = fontsArray.map(font => figma.loadFontAsync(font));
    await Promise.all(promises);
}
