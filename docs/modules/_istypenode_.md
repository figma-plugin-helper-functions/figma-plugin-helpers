
# Module: "isTypeNode"

## Index

### Functions

* [isComponentNode](_istypenode_.md#const-iscomponentnode)
* [isFrameNode](_istypenode_.md#const-isframenode)
* [isGroupNode](_istypenode_.md#const-isgroupnode)
* [isInstanceNode](_istypenode_.md#const-isinstancenode)
* [isOneOfNodeType](_istypenode_.md#const-isoneofnodetype)
* [isPageNode](_istypenode_.md#const-ispagenode)
* [isTextNode](_istypenode_.md#const-istextnode)

## Functions

### `Const` isComponentNode

▸ **isComponentNode**(`node`: BaseNode): *node is ComponentNode*

*Defined in [isTypeNode.ts:39](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/isTypeNode.ts#L39)*

Checks node to be ComponentNode

**Parameters:**

Name | Type |
------ | ------ |
`node` | BaseNode |

**Returns:** *node is ComponentNode*

___

### `Const` isFrameNode

▸ **isFrameNode**(`node`: BaseNode): *node is FrameNode*

*Defined in [isTypeNode.ts:18](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/isTypeNode.ts#L18)*

Checks node to be FrameNode

**Parameters:**

Name | Type |
------ | ------ |
`node` | BaseNode |

**Returns:** *node is FrameNode*

___

### `Const` isGroupNode

▸ **isGroupNode**(`node`: BaseNode): *node is GroupNode*

*Defined in [isTypeNode.ts:11](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/isTypeNode.ts#L11)*

Checks node to be GroupNode

**Parameters:**

Name | Type |
------ | ------ |
`node` | BaseNode |

**Returns:** *node is GroupNode*

___

### `Const` isInstanceNode

▸ **isInstanceNode**(`node`: BaseNode): *node is InstanceNode*

*Defined in [isTypeNode.ts:32](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/isTypeNode.ts#L32)*

Checks node to be InstanceNode

**Parameters:**

Name | Type |
------ | ------ |
`node` | BaseNode |

**Returns:** *node is InstanceNode*

___

### `Const` isOneOfNodeType

▸ **isOneOfNodeType**(`node`: BaseNode, `typeList`: NodeType[]): *boolean*

*Defined in [isTypeNode.ts:46](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/isTypeNode.ts#L46)*

Checks node to be one of provided types

**Parameters:**

Name | Type |
------ | ------ |
`node` | BaseNode |
`typeList` | NodeType[] |

**Returns:** *boolean*

___

### `Const` isPageNode

▸ **isPageNode**(`node`: BaseNode): *node is PageNode*

*Defined in [isTypeNode.ts:4](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/isTypeNode.ts#L4)*

Checks node to be PageNode

**Parameters:**

Name | Type |
------ | ------ |
`node` | BaseNode |

**Returns:** *node is PageNode*

___

### `Const` isTextNode

▸ **isTextNode**(`node`: BaseNode): *node is TextNode*

*Defined in [isTypeNode.ts:25](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/isTypeNode.ts#L25)*

Checks node to be TextNode

**Parameters:**

Name | Type |
------ | ------ |
`node` | BaseNode |

**Returns:** *node is TextNode*
