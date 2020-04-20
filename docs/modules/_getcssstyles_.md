
# Module: "getCSSStyles"

## Index

### Interfaces

* [UnitValueObj](../interfaces/_getcssstyles_.unitvalueobj.md)

### Functions

* [getStyleValue](_getcssstyles_.md#const-getstylevalue)
* [getTextNodeCSS](_getcssstyles_.md#const-gettextnodecss)
* [isUnitValue](_getcssstyles_.md#const-isunitvalue)
* [stringValueToCss](_getcssstyles_.md#const-stringvaluetocss)
* [unitValueToCss](_getcssstyles_.md#const-unitvaluetocss)

## Functions

### `Const` getStyleValue

▸ **getStyleValue**(`node`: TextNode, `key`: string, `exactString?`: boolean): *string*

*Defined in [getCSSStyles.ts:40](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/703a31f/src/helpers/getCSSStyles.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | TextNode |
`key` | string |
`exactString?` | boolean |

**Returns:** *string*

___

### `Const` getTextNodeCSS

▸ **getTextNodeCSS**(`node`: TextNode): *object*

*Defined in [getCSSStyles.ts:58](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/703a31f/src/helpers/getCSSStyles.ts#L58)*

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

___

### `Const` isUnitValue

▸ **isUnitValue**(`obj`: any): *obj is UnitValueObj*

*Defined in [getCSSStyles.ts:36](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/703a31f/src/helpers/getCSSStyles.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *obj is UnitValueObj*

___

### `Const` stringValueToCss

▸ **stringValueToCss**(`value`: string): *"flex-end" | "flex-start" | "center" | "lowercase" | "uppercase" | "capitalize" | "none"*

*Defined in [getCSSStyles.ts:8](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/703a31f/src/helpers/getCSSStyles.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *"flex-end" | "flex-start" | "center" | "lowercase" | "uppercase" | "capitalize" | "none"*

___

### `Const` unitValueToCss

▸ **unitValueToCss**(`__namedParameters`: object): *string*

*Defined in [getCSSStyles.ts:26](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/703a31f/src/helpers/getCSSStyles.ts#L26)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`unit` | "PIXELS" &#124; "PERCENT" &#124; "AUTO" |
`value` | number |

**Returns:** *string*
