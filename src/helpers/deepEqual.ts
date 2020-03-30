//this function performs a deep comparison of variables
export default function deepEqual(a, b): boolean {
	if (a === b) {
		return true
	} else if (typeof a == 'object' && a != null && typeof b == 'object' && b != null) {
		if (Object.keys(a).length != Object.keys(b).length) {
			return false
		}

		for (const prop in a) {
			console.log(prop, a[prop])
			if (b.hasOwnProperty(prop)) {
				if (!deepEqual(a[prop], b[prop])) return false
			} else return false
		}

		return true
	} else {
		return false
	}
}
