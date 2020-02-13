//this function returns clone the object
export default function clone(val) {
	let type = typeof val

	if (val === null) {
		return null
	} else if (type === 'undefined' || type === 'number' ||
		type === 'string' || type === 'boolean') {
		return val
	} else if (type === 'object') {
		if (val instanceof Array) {
			return val.map(x => clone(x))
		} else if (val instanceof Uint8Array) {
			return new Uint8Array(val)
		} else {
			let o = {}
			for (let key in val) {
				o[key] = clone(val[key])
			}
			return o
		}
	}

	throw 'unknown'
}