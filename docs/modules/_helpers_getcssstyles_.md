
# Module: "helpers/getCSSStyles"

## Index

### Functions

* [getTextNodeCSS](_helpers_getcssstyles_.md#const-gettextnodecss)

## Functions

### `Const` getTextNodeCSS

▸ **getTextNodeCSS**(`node`: TextNode): *object*

*Defined in [helpers/getCSSStyles.ts:58](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/043ed21/src/helpers/getCSSStyles.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | TextNode |

**Returns:** *object*

* **align-items**: *string* = getStyleValue(node, 'textAlignVertical')

* **display**: *string* = "flex"

* **font-family**: *string* = `${getStyleValue(node, 'fontName.family', true)} ${getStyleValue(
			node,
			'fontName.style',
			true
		)}`

* **font-size**: *string* = getStyleValue(node, 'fontSize')

* **font-style**: *string* = getStyleValue(node, 'fontName.style', true)

* **font-weight**: *string* = getStyleValue(node, 'fontName.style', true)

* **height**: *string* = getStyleValue(node, 'height')

* **justify-content**: *string* = getStyleValue(node, 'textAlignHorizontal')

* **left**: *string* = getStyleValue(node, 'x')

* **letter-spacing**: *string* = getStyleValue(node, 'letterSpacing')

* **line-height**: *string* = getStyleValue(node, 'lineHeight')

* **position**: *string* = "absolute"

* **text-decoration**: *string* = getStyleValue(node, 'textDecoration', true)

* **text-indent**: *string* = getStyleValue(node, 'paragraphIndent')

* **text-transform**: *string* = getStyleValue(node, 'textCase')

* **top**: *string* = getStyleValue(node, 'y')

* **width**: *string* = getStyleValue(node, 'width')
