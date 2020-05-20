interface Font {
	family: string
	style: string
}

declare module 'matrix-inverse' {
	const fn: <T extends (number[] | number[][])>(m: T) => T;
	export = fn;
}