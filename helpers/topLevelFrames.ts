//this function returns all top level frames on currentPage
export default function topLevelFrames() {
	return figma.currentPage.children.filter((node) => node.type === 'FRAME') as FrameNode[]
}
