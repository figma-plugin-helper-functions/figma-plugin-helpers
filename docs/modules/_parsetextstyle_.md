
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

▸ **applyTextStyleToTextNode**(`textStyle`: LetterStyle[], `textNode?`: TextNode, `isLoadFonts`: boolean): *Promise‹TextNode›*

*Defined in [parseTextStyle.ts:233](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7c4bed4/src/helpers/parseTextStyle.ts#L233)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`textStyle` | LetterStyle[] | - |
`textNode?` | TextNode | - |
`isLoadFonts` | boolean | true |

**Returns:** *Promise‹TextNode›*

___

###  changeCharactersTextStyle

▸ **changeCharactersTextStyle**(`textStyle`: LetterStyle[], `characters`: string): *any[]*

*Defined in [parseTextStyle.ts:286](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7c4bed4/src/helpers/parseTextStyle.ts#L286)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetterStyle[] |
`characters` | string |

**Returns:** *any[]*

___

###  changeTextStyle

▸ **changeTextStyle**(`textStyle`: LetterStyle[], `styleName`: "fontSize", `newValue`: number, `beforeValue?`: number): *any*

*Defined in [parseTextStyle.ts:317](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7c4bed4/src/helpers/parseTextStyle.ts#L317)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetterStyle[] |
`styleName` | "fontSize" |
`newValue` | number |
`beforeValue?` | number |

**Returns:** *any*

▸ **changeTextStyle**(`textStyle`: LetterStyle[], `styleName`: "fontName", `newValue`: FontName, `beforeValue?`: FontName): *any*

*Defined in [parseTextStyle.ts:323](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7c4bed4/src/helpers/parseTextStyle.ts#L323)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetterStyle[] |
`styleName` | "fontName" |
`newValue` | FontName |
`beforeValue?` | FontName |

**Returns:** *any*

▸ **changeTextStyle**(`textStyle`: LetterStyle[], `styleName`: "textCase", `newValue`: TextCase, `beforeValue?`: TextCase): *any*

*Defined in [parseTextStyle.ts:329](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7c4bed4/src/helpers/parseTextStyle.ts#L329)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetterStyle[] |
`styleName` | "textCase" |
`newValue` | TextCase |
`beforeValue?` | TextCase |

**Returns:** *any*

▸ **changeTextStyle**(`textStyle`: LetterStyle[], `styleName`: "textDecoration", `newValue`: TextDecoration, `beforeValue?`: TextDecoration): *any*

*Defined in [parseTextStyle.ts:335](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7c4bed4/src/helpers/parseTextStyle.ts#L335)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetterStyle[] |
`styleName` | "textDecoration" |
`newValue` | TextDecoration |
`beforeValue?` | TextDecoration |

**Returns:** *any*

▸ **changeTextStyle**(`textStyle`: LetterStyle[], `styleName`: "letterSpacing", `newValue`: LetterSpacing, `beforeValue?`: LetterSpacing): *any*

*Defined in [parseTextStyle.ts:341](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7c4bed4/src/helpers/parseTextStyle.ts#L341)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetterStyle[] |
`styleName` | "letterSpacing" |
`newValue` | LetterSpacing |
`beforeValue?` | LetterSpacing |

**Returns:** *any*

▸ **changeTextStyle**(`textStyle`: LetterStyle[], `styleName`: "lineHeight", `newValue`: LineHeight, `beforeValue?`: LineHeight): *any*

*Defined in [parseTextStyle.ts:347](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7c4bed4/src/helpers/parseTextStyle.ts#L347)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetterStyle[] |
`styleName` | "lineHeight" |
`newValue` | LineHeight |
`beforeValue?` | LineHeight |

**Returns:** *any*

▸ **changeTextStyle**(`textStyle`: LetterStyle[], `styleName`: "fills", `newValue`: Paint[], `beforeValue?`: Paint[]): *any*

*Defined in [parseTextStyle.ts:353](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7c4bed4/src/helpers/parseTextStyle.ts#L353)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetterStyle[] |
`styleName` | "fills" |
`newValue` | Paint[] |
`beforeValue?` | Paint[] |

**Returns:** *any*

▸ **changeTextStyle**(`textStyle`: LetterStyle[], `styleName`: "textStyleId" | "fillStyleId", `newValue`: string, `beforeValue?`: string): *any*

*Defined in [parseTextStyle.ts:359](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7c4bed4/src/helpers/parseTextStyle.ts#L359)*

**Parameters:**

Name | Type |
------ | ------ |
`textStyle` | LetterStyle[] |
`styleName` | "textStyleId" &#124; "fillStyleId" |
`newValue` | string |
`beforeValue?` | string |

**Returns:** *any*

___

###  joinTextLinesStyles

▸ **joinTextLinesStyles**(`textStyle`: LineStyle[], `addNewlineCharacters`: boolean | "
" | " "): *any*

*Defined in [parseTextStyle.ts:186](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7c4bed4/src/helpers/parseTextStyle.ts#L186)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`textStyle` | LineStyle[] | - |
`addNewlineCharacters` | boolean &#124; "
" &#124; " " | false |

**Returns:** *any*

___

###  parseTextStyle

▸ **parseTextStyle**(`node`: TextNode, `start`: number, `end?`: number, `styleName?`: FontStyleNames[]): *LetterStyle[]*

*Defined in [parseTextStyle.ts:36](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7c4bed4/src/helpers/parseTextStyle.ts#L36)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`node` | TextNode | - |
`start` | number | 0 |
`end?` | number | - |
`styleName?` | FontStyleNames[] | - |

**Returns:** *LetterStyle[]*

___

###  splitTextStyleIntoLines

▸ **splitTextStyleIntoLines**(`textStyle`: LetterStyle[], `removeNewlineCharacters`: boolean, `removeEmptylines`: boolean): *any[]*

*Defined in [parseTextStyle.ts:99](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7c4bed4/src/helpers/parseTextStyle.ts#L99)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`textStyle` | LetterStyle[] | - |
`removeNewlineCharacters` | boolean | false |
`removeEmptylines` | boolean | false |

**Returns:** *any[]*
