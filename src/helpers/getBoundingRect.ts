/**
 *  this function return a bounding rect for an nodes
 */
// x/y absolute coordinates
// height/width
// x2/y2 bottom right coordinates
export default function getBoundingRect(nodes: SceneNode[]) {
	const boundingRect = {
		x: 0,
		y: 0,
		x2: 0,
		y2: 0,
		height: 0,
		width: 0
	}

	// to assemble coordinates
	function pushXY(x, y, w, h, rez) {
		rez.x.push(x)
		rez.y.push(y)
		rez.x2.push(x + w)
		rez.y2.push(y + h)
	}

	if (nodes.length > 0) {
		const xy = nodes.reduce(
			(rez, node) => {
				let [[, , x], [, , y]] = node.absoluteTransform
				const height = node.height
				const width = node.width

				if (Math.abs(node.rotation) === 0) {
					pushXY(x, y, width, height, rez)
				} else {
					let r = node.rotation % 180
					const reversed = r > 90 || r < -90

					if (reversed) {
						r = r + 180 * -Math.sign(r)
					} else {
						r = -r
					}

					const a = (r * Math.PI) / 180
					const s = Math.sin(a)
					const c = Math.cos(a)

					const w = Math.abs(height * s) + Math.abs(width * c)
					const h = Math.abs(height * c) + Math.abs(width * s)

					if (a < 0) {
						if (reversed) {
							y = y - h
							x = x - width * c
						} else {
							y = y + width * s
						}
					} else if (a > 0) {
						if (reversed) {
							y = y - height * c
							x = x - w
						} else {
							x = x - height * s
						}
					} else if (a == 0) {
						if (Math.abs(node.rotation) === 180) {
							y = y - h
							x = x - w
						}
					}

					pushXY(x, y, w, h, rez)
				}

				return rez
			},
			{ x: [], y: [], x2: [], y2: [] }
		)

		const rect = {
			x: Math.min(...xy.x),
			y: Math.min(...xy.y),
			x2: Math.max(...xy.x2),
			y2: Math.max(...xy.y2)
		}

		boundingRect.x = rect.x
		boundingRect.y = rect.y
		boundingRect.x2 = rect.x2
		boundingRect.y2 = rect.y2
		boundingRect.width = rect.x2 - rect.x
		boundingRect.height = rect.y2 - rect.y
	}

	return boundingRect
}
