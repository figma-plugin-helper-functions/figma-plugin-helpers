//this function returns all top level frames on currentPage
export default function topLevelFrames(page: PageNode = figma.currentPage) {
	return page.children.filter((node) => node.type === 'FRAME') as FrameNode[]
}
