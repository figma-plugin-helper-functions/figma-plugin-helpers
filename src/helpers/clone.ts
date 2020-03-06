//this function returns clone the object
export default function clone(val) {
	const type = typeof val

	if (
		type === 'undefined' ||
		type === 'number' ||
		type === 'string' ||
		type === 'boolean' ||
		type === 'symbol' ||
		val === null
	) {
		return val
	} else if (type === 'object') {
		if (val instanceof Array) {
			return val.map(clone)
		} else if (val instanceof Uint8Array) {
			return new Uint8Array(val)
		} else {
			const o = {}
			for (const key in val) {
				o[key] = clone(val[key])
			}
			return o
		}
	}

	throw 'unknown'
}
