
# Module: "extractRadialOrDiamondGradientParams"

## Index

### Functions

* [extractRadialOrDiamondGradientParams](_extractradialordiamondgradientparams_.md#extractradialordiamondgradientparams)

## Functions

###  extractRadialOrDiamondGradientParams

▸ **extractRadialOrDiamondGradientParams**(`shapeWidth`: number, `shapeHeight`: number, `t`: number[][]): *object*

*Defined in [extractRadialOrDiamondGradientParams.ts:11](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/66648a3/src/helpers/extractRadialOrDiamondGradientParams.ts#L11)*

This method can extract the rotation (in degrees), center point and radius for a radial or diamond gradient

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`shapeWidth` | number | - |
`shapeHeight` | number | - |
`t` | number[][] |   |

**Returns:** *object*

* **center**: *number[]* = [centerPoint[0] * shapeWidth, centerPoint[1] * shapeHeight]

* **radius**: *number[]* = [rx * shapeWidth, ry * shapeHeight]

* **rotation**: *number* = angle
