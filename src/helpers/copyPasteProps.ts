/**
 * Copy properties from one node to another while avoiding conflicts. When no target node is provided it returns a new object.
 *
 * For example:
 * ```js
 * const rectangle = figma.createRectangle()
 * const frame = figma.createFrame()
 *
 * copyPaste({ rectangle, frame, exclude: ['fills'] })
 * ```
 *
 * This will copy and paste all properties except for `fills` and readonly properties.
 *
 * @param source - Node being copied from
 * @param target - Node being copied to
 * @param include - Props that should be copied
 * @param exclude - Props that shouldn't be copied
 */

const nodeProps: string[] = [
	'id',
	'parent',
	'name',
	'removed',
	'visible',
	'locked',
	'children',
	'constraints',
	'absoluteTransform',
	'relativeTransform',
	'x',
	'y',
	'rotation',
	'width',
	'height',
	'constrainProportions',
	'layoutAlign',
	'layoutGrow',
	'opacity',
	'blendMode',
	'isMask',
	'effects',
	'effectStyleId',
	'expanded',
	'backgrounds',
	'backgroundStyleId',
	'fills',
	'strokes',
	'strokeWeight',
	'strokeMiterLimit',
	'strokeAlign',
	'strokeCap',
	'strokeJoin',
	'dashPattern',
	'fillStyleId',
	'strokeStyleId',
	'cornerRadius',
	'cornerSmoothing',
	'topLeftRadius',
	'topRightRadius',
	'bottomLeftRadius',
	'bottomRightRadius',
	'exportSettings',
	'overflowDirection',
	'numberOfFixedChildren',
	'overlayPositionType',
	'overlayBackground',
	'overlayBackgroundInteraction',
	'reactions',
	'description',
	'remote',
	'key',
	'layoutMode',
	'primaryAxisSizingMode',
	'counterAxisSizingMode',
	'primaryAxisAlignItems',
	'counterAxisAlignItems',
	'paddingLeft',
	'paddingRight',
	'paddingTop',
	'paddingBottom',
	'itemSpacing',
	'horizontalPadding',
	'verticalPadding',
	'layoutGrids',
	'gridStyleId',
	'clipsContent',
	'guides'
]

const readonly: string[] = [
	'id',
	'parent',
	'removed',
	'children',
	'absoluteTransform',
	'width',
	'height',
	'overlayPositionType',
	'overlayBackground',
	'overlayBackgroundInteraction',
	'reactions',
	'remote',
	'key',
	'type'
]

export default function copyPasteProps(source, target?, { include, exclude }: any = {}) {
	let allowlist: string[] = nodeProps

	if (include) {
		allowlist = include
	} else if (exclude) {
		allowlist = allowlist.filter(function(el) {
			return !exclude.concat(readonly).includes(el)
		})
	}

	const val = source
	const type = typeof source

	if (
		type === 'undefined' ||
		type === 'number' ||
		type === 'string' ||
		type === 'boolean' ||
		type === 'symbol' ||
		source === null
	) {
		return val
	} else if (type === 'object') {
		if (val instanceof Array) {
			return val.map(copyPasteProps)
		} else if (val instanceof Uint8Array) {
			return new Uint8Array(val)
		} else {
			const o: any = {}
			for (const key1 in val) {
				if (target) {
					for (const key2 in target) {
						if (allowlist.includes(key2)) {
							if (key1 === key2) {
								o[key1] = copyPasteProps(val[key1])
							}
						}
					}
				} else {
					o[key1] = copyPasteProps(val[key1])
				}
			}

			if (target) {
				!o.fillStyleId && o.fills ? null : delete o.fills
				!o.strokeStyleId && o.strokes ? null : delete o.strokes
				!o.backgroundStyleId && o.backgrounds ? null : delete o.backgrounds

				return target ? Object.assign(target, o) : o
			} else {
				return o
			}
		}
	}

	throw 'unknown'
}
