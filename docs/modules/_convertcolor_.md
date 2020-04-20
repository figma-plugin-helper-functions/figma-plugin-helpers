
# Module: "convertColor"

## Index

### Type aliases

* [webRGB](_convertcolor_.md#webrgb)
* [webRGBA](_convertcolor_.md#webrgba)

### Variables

* [namesRGB](_convertcolor_.md#const-namesrgb)

### Functions

* [figmaRGBToHex](_convertcolor_.md#figmargbtohex)
* [figmaRGBToWebRGB](_convertcolor_.md#figmargbtowebrgb)
* [hexToFigmaRGB](_convertcolor_.md#hextofigmargb)
* [webRGBToFigmaRGB](_convertcolor_.md#webrgbtofigmargb)

## Type aliases

###  webRGB

Ƭ **webRGB**: *[number, number, number]*

*Defined in [convertColor.ts:93](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/55a4bdc/src/helpers/convertColor.ts#L93)*

___

###  webRGBA

Ƭ **webRGBA**: *[number, number, number, number]*

*Defined in [convertColor.ts:94](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/55a4bdc/src/helpers/convertColor.ts#L94)*

## Variables

### `Const` namesRGB

• **namesRGB**: *string[]* = ['r', 'g', 'b']

*Defined in [convertColor.ts:1](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/55a4bdc/src/helpers/convertColor.ts#L1)*

## Functions

###  figmaRGBToHex

▸ **figmaRGBToHex**(`color`: RGB | RGBA): *string*

*Defined in [convertColor.ts:44](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/55a4bdc/src/helpers/convertColor.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`color` | RGB &#124; RGBA |

**Returns:** *string*

___

###  figmaRGBToWebRGB

▸ **figmaRGBToWebRGB**(`color`: RGBA): *[webRGBA](_convertcolor_.md#webrgba)*

*Defined in [convertColor.ts:8](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/55a4bdc/src/helpers/convertColor.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`color` | RGBA |

**Returns:** *[webRGBA](_convertcolor_.md#webrgba)*

▸ **figmaRGBToWebRGB**(`color`: RGB): *[webRGB](_convertcolor_.md#webrgb)*

*Defined in [convertColor.ts:9](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/55a4bdc/src/helpers/convertColor.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`color` | RGB |

**Returns:** *[webRGB](_convertcolor_.md#webrgb)*

___

###  hexToFigmaRGB

▸ **hexToFigmaRGB**(`color`: string): *RGB | RGBA*

*Defined in [convertColor.ts:66](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/55a4bdc/src/helpers/convertColor.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`color` | string |

**Returns:** *RGB | RGBA*

___

###  webRGBToFigmaRGB

▸ **webRGBToFigmaRGB**(`color`: [webRGBA](_convertcolor_.md#webrgba)): *RGBA*

*Defined in [convertColor.ts:26](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/55a4bdc/src/helpers/convertColor.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`color` | [webRGBA](_convertcolor_.md#webrgba) |

**Returns:** *RGBA*

▸ **webRGBToFigmaRGB**(`color`: [webRGB](_convertcolor_.md#webrgb)): *RGB*

*Defined in [convertColor.ts:27](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/55a4bdc/src/helpers/convertColor.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`color` | [webRGB](_convertcolor_.md#webrgb) |

**Returns:** *RGB*
