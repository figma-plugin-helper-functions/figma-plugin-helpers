//import all helper functions here
import clone from './helpers/clone'
import copyPasteProps from './helpers/copyPasteProps'
import getAllFonts from './helpers/getAllFonts'
import getBoundingRect from './helpers/getBoundingRect'
import getNodeIndex from './helpers/getNodeIndex'
import getPage from './helpers/getPage'
import { hasChildren } from './helpers/hasChildren'
import isPartOfInstance from './helpers/isPartOfInstance'
import isPartOfNode from './helpers/isPartOfNode'
import isVisibleNode from './helpers/isVisibleNode'
import loadUniqueFonts from './helpers/loadUniqueFonts'
import loadFonts from './helpers/loadFonts'
import { nodeToObject } from './helpers/nodeToObject'
import topLevelFrames from './helpers/topLevelFrames'
import { getTextNodeCSS } from './helpers/getCSSStyles'
import { findAll } from './helpers/findMethods'
import { getRelativePosition, getTopLevelParent } from './helpers/getRelativePosition'
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
import { extractImageCropParams } from './helpers/extractImageCropParams'
import { extractLinearGradientParamsFromTransform } from './helpers/extractLinearGradientStartEnd'
import { extractRadialOrDiamondGradientParams } from './helpers/extractRadialOrDiamondGradientParams'
import { setCharacters } from './helpers/setCharacters'
import {
	parseTextStyle,
	splitTextStyleIntoLines,
	joinTextLinesStyles,
	applyTextStyleToTextNode,
	changeCharactersTextStyle,
	changeTextStyle
} from './helpers/parseTextStyle'

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
	loadFonts,
	isPartOfInstance,
	isPartOfNode,
	isVisibleNode,
	isOneOfNodeType,
	clone,
	copyPasteProps,
	getBoundingRect,
	nodeToObject,
	getTextNodeCSS,
	figmaRGBToWebRGB,
	webRGBToFigmaRGB,
	figmaRGBToHex,
	hexToFigmaRGB,
	getRelativePosition,
	getTopLevelParent,
	hasChildren,
	findAll,
	extractImageCropParams,
	extractLinearGradientParamsFromTransform,
	extractRadialOrDiamondGradientParams,
	setCharacters,
	parseTextStyle,
	splitTextStyleIntoLines,
	joinTextLinesStyles,
	applyTextStyleToTextNode,
	changeCharactersTextStyle,
	changeTextStyle
}
