
# Module: "convertColor"

## Index

### Functions

* [figmaRGBToHex](_convertcolor_.md#figmargbtohex)
* [figmaRGBToWebRGB](_convertcolor_.md#figmargbtowebrgb)
* [hexToFigmaRGB](_convertcolor_.md#hextofigmargb)
* [webRGBToFigmaRGB](_convertcolor_.md#webrgbtofigmargb)

## Functions

###  figmaRGBToHex

▸ **figmaRGBToHex**(`color`: RGB | RGBA): *string*

*Defined in [convertColor.ts:50](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7e97ef9/src/helpers/convertColor.ts#L50)*

this function converts figma color to HEX (string)

**Parameters:**

Name | Type |
------ | ------ |
`color` | RGB &#124; RGBA |

**Returns:** *string*

___

###  figmaRGBToWebRGB

▸ **figmaRGBToWebRGB**(`color`: RGBA): *webRGBA*

*Defined in [convertColor.ts:10](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7e97ef9/src/helpers/convertColor.ts#L10)*

this function converts figma color to RGB(A) (array)

**Parameters:**

Name | Type |
------ | ------ |
`color` | RGBA |

**Returns:** *webRGBA*

▸ **figmaRGBToWebRGB**(`color`: RGB): *webRGB*

*Defined in [convertColor.ts:11](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7e97ef9/src/helpers/convertColor.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`color` | RGB |

**Returns:** *webRGB*

___

###  hexToFigmaRGB

▸ **hexToFigmaRGB**(`color`: string): *RGB | RGBA*

*Defined in [convertColor.ts:74](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7e97ef9/src/helpers/convertColor.ts#L74)*

this function converts HEX color (string) to figma color

**Parameters:**

Name | Type |
------ | ------ |
`color` | string |

**Returns:** *RGB | RGBA*

___

###  webRGBToFigmaRGB

▸ **webRGBToFigmaRGB**(`color`: webRGBA): *RGBA*

*Defined in [convertColor.ts:30](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7e97ef9/src/helpers/convertColor.ts#L30)*

this function converts RGB(A) color (array) to figma color

**Parameters:**

Name | Type |
------ | ------ |
`color` | webRGBA |

**Returns:** *RGBA*

▸ **webRGBToFigmaRGB**(`color`: webRGB): *RGB*

*Defined in [convertColor.ts:31](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7e97ef9/src/helpers/convertColor.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`color` | webRGB |

**Returns:** *RGB*
