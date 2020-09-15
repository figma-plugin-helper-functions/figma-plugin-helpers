
# Module: "getRelativePosition"

## Index

### Functions

* [getRelativePosition](_getrelativeposition_.md#const-getrelativeposition)
* [getTopLevelParent](_getrelativeposition_.md#const-gettoplevelparent)

## Functions

### `Const` getRelativePosition

▸ **getRelativePosition**(`node`: BaseNode & LayoutMixin, `relativeNode?`: BaseNode & LayoutMixin): *object*

*Defined in [getRelativePosition.ts:32](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7c4bed4/src/helpers/getRelativePosition.ts#L32)*

Calculate relative position of node based on provided parent or top level parent.
For example:
```js
// for structure below
// Page / Frame / Group1 / Group2 / Text

getRelativePosition(Text, Group1) // will calculate { x, y } based on Group1

getRelativePosition(Text) // will calculate { x, y } based on Frame
```

**Parameters:**

Name | Type |
------ | ------ |
`node` | BaseNode & LayoutMixin |
`relativeNode?` | BaseNode & LayoutMixin |

**Returns:** *object*

* **x**: *number* = Math.abs(
			Math.round(relativeNode.absoluteTransform[0][2] - node.absoluteTransform[0][2])
		)

* **y**: *number* = Math.abs(Math.round(relativeNode.absoluteTransform[1][2] - node.absoluteTransform[1][2]))

___

### `Const` getTopLevelParent

▸ **getTopLevelParent**(`node`: BaseNode): *BaseNode*

*Defined in [getRelativePosition.ts:12](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7c4bed4/src/helpers/getRelativePosition.ts#L12)*

Return top level parent for node before PageNode.
For example:
```js
// for structure below
// Page / Frame / Group1 / Group2 / Text

getTopLevelParent(Text) // Frame
```

**Parameters:**

Name | Type |
------ | ------ |
`node` | BaseNode |

**Returns:** *BaseNode*
