//import all helper functions here
import getPage from './helpers/getPage'
import getNodeIndex from './helpers/getNodeIndex'
import isPartOfInstance from './helpers/isPartOfInstance'
import isPartOfNode from './helpers/isPartOfNode'
import topLevelFrames from './helpers/topLevelFrames'
import getAllFonts from './helpers/getAllFonts'
import loadUniqueFonts from './helpers/loadUniqueFonts'
import clone from './helpers/clone'
import getBoundingRect from './helpers/getBoundingRect'
import {
	isComponentNode,
	isFrameNode,
	isGroupNode,
	isInstanceNode,
	isPageNode,
	isTextNode,
	isOneOfNodeType
} from './helpers/isTypeNode'

//export all helper functions so they can be used indidually as needed
export {
	getPage,
	getNodeIndex,
	isComponentNode,
	isFrameNode,
	isGroupNode,
	isInstanceNode,
	isPageNode,
	isTextNode,
	topLevelFrames,
	getAllFonts,
	loadUniqueFonts,
	isPartOfInstance,
	isPartOfNode,
	isOneOfNodeType,
	clone,
	getBoundingRect
}
