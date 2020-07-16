
# Module: "extractLinearGradientStartEnd"

## Index

### Functions

* [extractLinearGradientParamsFromTransform](_extractlineargradientstartend_.md#extractlineargradientparamsfromtransform)

## Functions

###  extractLinearGradientParamsFromTransform

▸ **extractLinearGradientParamsFromTransform**(`shapeWidth`: number, `shapeHeight`: number, `t`: Transform): *object*

*Defined in [extractLinearGradientStartEnd.ts:12](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/c5d7d3c/src/helpers/extractLinearGradientStartEnd.ts#L12)*

This method can extract the x and y positions of the start and end of the linear gradient
(scale is not important here)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`shapeWidth` | number | number |
`shapeHeight` | number | number |
`t` | Transform | Transform  |

**Returns:** *object*

* **end**: *number[]* = [startEnd[1][0] * shapeWidth, startEnd[1][1] * shapeHeight]

* **start**: *number[]* = [startEnd[0][0] * shapeWidth, startEnd[0][1] * shapeHeight]
