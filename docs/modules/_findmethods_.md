
# Module: "findMethods"

## Index

### Functions

* [findAll](_findmethods_.md#const-findall)
* [findOne](_findmethods_.md#const-findone)

## Functions

### `Const` findAll

▸ **findAll**(`nodes`: keyof SceneNode[], `iteratee`: function): *any[]*

*Defined in [findMethods.ts:21](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/48d6a43/src/helpers/findMethods.ts#L21)*

Custom implementation of the figma.findAll method, which runs x1000 times faster.

### Usage example
```ts
import { findAll, isTextNode } from "@figma-plugin/helpers"

const textNodes = findAll(figma.currentPage.children, isTextNode)
```

### How to replace native `figma.findAll`
```diff
+ import { findAll } from "@figma-plugin/helpers"

- const textNodes = figma.currentPage.findAll((node) => node.type === "TEXT");
+ const textNodes = findAll(figma.currentPage.children, (node) => node.type === "TEXT")
```

**Parameters:**

▪ **nodes**: *keyof SceneNode[]*

▪ **iteratee**: *function*

▸ (`elem?`: BaseNode, `idx?`: number, `array?`: keyof SceneNode[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`elem?` | BaseNode |
`idx?` | number |
`array?` | keyof SceneNode[] |

**Returns:** *any[]*

___

### `Const` findOne

▸ **findOne**(`nodes`: keyof SceneNode[], `iteratee`: function): *any*

*Defined in [findMethods.ts:53](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/48d6a43/src/helpers/findMethods.ts#L53)*

Custom implementation of the figma.findOne method, which runs x100 times faster.

### Usage example
```ts
import { findOne, isTextNode } from "@figma-plugin/helpers"

const textNode = findOne(figma.currentPage.children, isTextNode)
```

### How to replace native `figma.findOne`
```diff
+ import { findOne } from "@figma-plugin/helpers"

- const textNode = figma.currentPage.findOne((node) => node.type === "TEXT");
+ const textNode = findOne(figma.currentPage.children, (node) => node.type === "TEXT")
```

**Parameters:**

▪ **nodes**: *keyof SceneNode[]*

▪ **iteratee**: *function*

▸ (`elem?`: BaseNode, `idx?`: number, `array?`: keyof SceneNode[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`elem?` | BaseNode |
`idx?` | number |
`array?` | keyof SceneNode[] |

**Returns:** *any*
