//import all helper functions here
import getPage from './helpers/getPage'
import getNodeIndex from './helpers/getNodeIndex'
import isPartOfInstance from './helpers/isPartOfInstance'
import isPartOfNode from './helpers/isPartOfNode'
import isVisibleNode from './helpers/isVisibleNode'
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
import nodeToObject from './helpers/nodeToObject'
import { getTextNodeCSS } from './helpers/getCSSStyles'
import {
	figmaRGBToWebRGB,
	webRGBToFigmaRGB,
	figmaRGBToHex,
	hexToFigmaRGB
} from './helpers/convertСolor'

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
	hexToFigmaRGB
}
