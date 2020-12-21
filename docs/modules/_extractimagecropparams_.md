
# Module: "extractImageCropParams"

## Index

### Functions

* [extractImageCropParams](_extractimagecropparams_.md#extractimagecropparams)

## Functions

###  extractImageCropParams

▸ **extractImageCropParams**(`shapeWidth`: number, `shapeHeight`: number, `t`: Transform): *object*

*Defined in [extractImageCropParams.ts:11](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/66648a3/src/helpers/extractImageCropParams.ts#L11)*

This method can extract the image crop rotation, scale (/size) and position.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`shapeWidth` | number | - |
`shapeHeight` | number | - |
`t` | Transform |   |

**Returns:** *object*

* **position**: *number[]* = [-points[0][0] * shapeWidth, -points[0][1] * shapeHeight]

* **rotation**: *number* = angle * (180 / Math.PI)

* **scale**: *number[]* = [sx, sy]

* **size**: *number[]* = [sx * shapeWidth, sy * shapeHeight]
