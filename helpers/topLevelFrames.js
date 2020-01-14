//this function returns all top level frames on currentPage
const topLevelFrames = () => {
    let frames = Array.from(figma.currentPage.findAll(item => item.type === 'FRAME' && item.parent.type === 'PAGE'));
    return frames;
}

export default topLevelFrames;