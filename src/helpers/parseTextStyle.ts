import { isEqual, cloneDeep } from 'lodash'

const styleFonts: FontStyleNames[] = [
	'fontSize',
	'fontName',
	'textCase',
	'textDecoration',
	'letterSpacing',
	'lineHeight',
	'fills'
]

/*
	Функция парсит стили текстового узла, разбивая их по массивам, вроде
	[{
		characters: "строка",
		... (её стили)
	}, ...]

	---

	Вернёт стиль для всего текста
	parseTextStyle(textNode)
	
	Вернёт стиль для текста с 100 символа
	parseTextStyle(textNode, 100)

	Вернёт стиль только для fontName и textDecoration
	parseTextStyle(textNode, undefined, undefined, ["fontName", "textDecoration"])
*/

export function parseTextStyle(
	node: TextNode,
	start = 0,
	end?: number,
	styleName?: FontStyleNames[]
): LetteStyle[] {
	if (!end) end = node.characters.length
	if (!styleName) styleName = styleFonts

	// страка подстрок, определённых стилей
	const styleMap = []

	// формируемая cтрока, определённого стиля
	let textStyle: LetteStyle

	// Сравнение стилей символа со стилями формируемой подстроки
	const isEqualLetterStyle = (letter: LetteStyle): boolean => {
		let is = true

		// перебераем свойства шрифта
		for (const key in letter) {
			if (key !== 'characters') {
				if (!isEqual(letter[key], textStyle[key])) {
					// свойство разнится
					// прекращаем перебор
					is = false
					break
				}
			}
		}

		return is
	}

	const names = styleName.map((name) => {
		return name.replace(/^(.)/g, ($1) => $1.toUpperCase())
	})

	// разбиение на подстроки

	for (let startIndex = start; startIndex < end; startIndex++) {
		const endIndex = startIndex + 1
		const letter = { characters: node.characters[startIndex] }

		// сбор стилей
		names.forEach((n, i) => {
			letter[styleName[i]] = node['getRange' + n](startIndex, endIndex)
		})

		if (textStyle) {
			if (isEqualLetterStyle(letter)) {
				// символ имеет теже свойства, что и формируемая подстрока
				// добавляем его к ней
				textStyle.characters += letter.characters
			} else {
				// свойства стиля отличается
				styleMap.push(textStyle)
				// начинаем формировать новую подстроку
				textStyle = letter
			}
		} else {
			// начинаем формирование первой подстроки
			textStyle = letter
		}
	}

	styleMap.push(textStyle)
	return styleMap
}

/*
	Позволяет разбить стили, полученные с помощью parseTextStyle, на строки (по символам переноса).
	Если параметр removeNewlineCharacters == true, символы новых строк будут удалены.
	При removeEmptylines == true будут удалены пустые строки
*/

export function splitTextStyleIntoLines(
	textStyle: LetteStyle[],
	removeNewlineCharacters = false,
	removeEmptylines = false
) {
	let lines: LetteStyle[][] = []
	let line = []
	const re = new RegExp('(\n|\u2028)|(.+)(\n|\u2028)?', 'g')
	const re2 = new RegExp('\n|\u2028')

	textStyle.forEach((style) => {
		if (re2.test(style.characters)) {
			const ls = style.characters.match(re)

			if (ls === null) {
				// текст стиля отсутствует

				line.push(style)
			} else if (ls.length === 1) {
				// текст стиля состоит из 1 строки

				line.push(style)
				lines.push(line)
				line = []
			} else {
				// текст стиля из нескольких строк

				style = cloneDeep(style)
				style.characters = ls.shift()
				line.push(style)
				lines.push(line)
				line = []

				const last = ls.pop()

				// разбираемся над внутренними строками текста стиля
				lines.push(
					...ls.map((e) => {
						style = cloneDeep(style)
						style.characters = e
						return [style]
					})
				)

				if (re2.test(last)) {
					// последняя строка конечная
					style = cloneDeep(style)
					style.characters = last
					lines.push([style])
				} else {
					// не заканчивается
					style = cloneDeep(style)
					style.characters = last
					line.push(style)
				}
			}
		} else {
			line.push(style)
		}
	})

	if (line.length) lines.push(line)

	// удаляем сиволы новой строки
	if (removeNewlineCharacters) {
		lines.forEach((l) => {
			l.forEach((style) => {
				style.characters = style.characters.replace(re2, '')
			})
		})
	}

	// удаляем пустые строки
	if (removeEmptylines) {
		lines = lines.filter(
			(l) => l.filter((l) => l.characters.replace(re2, '') !== '').length !== 0
		)
	}

	return lines
}
