
# Module: "parseTextStyle"

## Index

### Functions

* [applyTextStyleToTextNode](_parsetextstyle_.md#applytextstyletotextnode)
* [changeCharactersTextStyle](_parsetextstyle_.md#changecharacterstextstyle)
* [changeTextStyle](_parsetextstyle_.md#changetextstyle)
* [joinTextLinesStyles](_parsetextstyle_.md#jointextlinesstyles)
* [parseTextStyle](_parsetextstyle_.md#parsetextstyle)
* [splitTextStyleIntoLines](_parsetextstyle_.md#splittextstyleintolines)

## Functions

###  applyTextStyleToTextNode

▸ **applyTextStyleToTextNode**(`textStyle`: LetteStyle[], `textNode?`: TextNode): *Promise‹TextNode›*

*Defined in [parseTextStyle.ts:217](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/parseTextStyle.ts#L217)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetteStyle[] |
`textNode?` | TextNode |

**Returns:** *Promise‹TextNode›*

___

###  changeCharactersTextStyle

▸ **changeCharactersTextStyle**(`textStyle`: LetteStyle[], `characters`: string): *any[]*

*Defined in [parseTextStyle.ts:267](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/parseTextStyle.ts#L267)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetteStyle[] |
`characters` | string |

**Returns:** *any[]*

___

###  changeTextStyle

▸ **changeTextStyle**(`textStyle`: LetteStyle[], `styleName`: "fontSize", `newValue`: number, `beforeValue?`: number): *any*

*Defined in [parseTextStyle.ts:298](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/parseTextStyle.ts#L298)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetteStyle[] |
`styleName` | "fontSize" |
`newValue` | number |
`beforeValue?` | number |

**Returns:** *any*

▸ **changeTextStyle**(`textStyle`: LetteStyle[], `styleName`: "fontName", `newValue`: FontName, `beforeValue?`: FontName): *any*

*Defined in [parseTextStyle.ts:304](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/parseTextStyle.ts#L304)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetteStyle[] |
`styleName` | "fontName" |
`newValue` | FontName |
`beforeValue?` | FontName |

**Returns:** *any*

▸ **changeTextStyle**(`textStyle`: LetteStyle[], `styleName`: "textCase", `newValue`: TextCase, `beforeValue?`: TextCase): *any*

*Defined in [parseTextStyle.ts:310](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/parseTextStyle.ts#L310)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetteStyle[] |
`styleName` | "textCase" |
`newValue` | TextCase |
`beforeValue?` | TextCase |

**Returns:** *any*

▸ **changeTextStyle**(`textStyle`: LetteStyle[], `styleName`: "textDecoration", `newValue`: TextDecoration, `beforeValue?`: TextDecoration): *any*

*Defined in [parseTextStyle.ts:316](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/parseTextStyle.ts#L316)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetteStyle[] |
`styleName` | "textDecoration" |
`newValue` | TextDecoration |
`beforeValue?` | TextDecoration |

**Returns:** *any*

▸ **changeTextStyle**(`textStyle`: LetteStyle[], `styleName`: "letterSpacing", `newValue`: LetterSpacing, `beforeValue?`: LetterSpacing): *any*

*Defined in [parseTextStyle.ts:322](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/parseTextStyle.ts#L322)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetteStyle[] |
`styleName` | "letterSpacing" |
`newValue` | LetterSpacing |
`beforeValue?` | LetterSpacing |

**Returns:** *any*

▸ **changeTextStyle**(`textStyle`: LetteStyle[], `styleName`: "lineHeight", `newValue`: LineHeight, `beforeValue?`: LineHeight): *any*

*Defined in [parseTextStyle.ts:328](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/parseTextStyle.ts#L328)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetteStyle[] |
`styleName` | "lineHeight" |
`newValue` | LineHeight |
`beforeValue?` | LineHeight |

**Returns:** *any*

▸ **changeTextStyle**(`textStyle`: LetteStyle[], `styleName`: "fills", `newValue`: Paint[], `beforeValue?`: Paint[]): *any*

*Defined in [parseTextStyle.ts:334](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/parseTextStyle.ts#L334)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetteStyle[] |
`styleName` | "fills" |
`newValue` | Paint[] |
`beforeValue?` | Paint[] |

**Returns:** *any*

▸ **changeTextStyle**(`textStyle`: LetteStyle[], `styleName`: "textStyleId" | "fillStyleId", `newValue`: string, `beforeValue?`: string): *any*

*Defined in [parseTextStyle.ts:340](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/parseTextStyle.ts#L340)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetteStyle[] |
`styleName` | "textStyleId" &#124; "fillStyleId" |
`newValue` | string |
`beforeValue?` | string |

**Returns:** *any*

___

###  joinTextLinesStyles

▸ **joinTextLinesStyles**(`textStyle`: LetteStyle[][], `addNewlineCharacters`: boolean): *any[]*

*Defined in [parseTextStyle.ts:184](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/parseTextStyle.ts#L184)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`textStyle` | LetteStyle[][] | - |
`addNewlineCharacters` | boolean | false |

**Returns:** *any[]*

___

###  parseTextStyle

▸ **parseTextStyle**(`node`: TextNode, `start`: number, `end?`: number, `styleName?`: FontStyleNames[]): *LetteStyle[]*

*Defined in [parseTextStyle.ts:34](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/parseTextStyle.ts#L34)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`node` | TextNode | - |
`start` | number | 0 |
`end?` | number | - |
`styleName?` | FontStyleNames[] | - |

**Returns:** *LetteStyle[]*

___

###  splitTextStyleIntoLines

▸ **splitTextStyleIntoLines**(`textStyle`: LetteStyle[], `removeNewlineCharacters`: boolean, `removeEmptylines`: boolean): *any[][]*

*Defined in [parseTextStyle.ts:97](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/parseTextStyle.ts#L97)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`textStyle` | LetteStyle[] | - |
`removeNewlineCharacters` | boolean | false |
`removeEmptylines` | boolean | false |

**Returns:** *any[][]*
