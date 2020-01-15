//this function returns all top level frames on currentPage
export default function topLevelFrames() {
    let frames = Array.from(figma.currentPage.findAll(item => item.type === 'FRAME' && item.parent.type === 'PAGE')) as FrameNode[];
    return frames;
}