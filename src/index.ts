//import all helper functions here
import clone from './helpers/clone'
import getAllFonts from './helpers/getAllFonts'
import getBoundingRect from './helpers/getBoundingRect'
import getNodeIndex from './helpers/getNodeIndex'
import getPage from './helpers/getPage'
import getRealtivePosition from './helpers/getRealtivePosition'
import isPartOfInstance from './helpers/isPartOfInstance'
import isPartOfNode from './helpers/isPartOfNode'
import isVisibleNode from './helpers/isVisibleNode'
import loadUniqueFonts from './helpers/loadUniqueFonts'
import nodeToObject from './helpers/nodeToObject'
import topLevelFrames from './helpers/topLevelFrames'
import { getTextNodeCSS } from './helpers/getCSSStyles'
import {
	figmaRGBToWebRGB,
	webRGBToFigmaRGB,
	figmaRGBToHex,
	hexToFigmaRGB
} from './helpers/convertColor'
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
	isVisibleNode,
	isOneOfNodeType,
	clone,
	getBoundingRect,
	nodeToObject,
	getTextNodeCSS,
	figmaRGBToWebRGB,
	webRGBToFigmaRGB,
	figmaRGBToHex,
	hexToFigmaRGB,
	getRealtivePosition
}
