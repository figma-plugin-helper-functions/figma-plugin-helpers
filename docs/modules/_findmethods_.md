
# Module: "findMethods"

## Index

### Functions

* [findAll](_findmethods_.md#const-findall)

## Functions

### `Const` findAll

▸ **findAll**(`nodes`: Children, `iteratee`: function): *any[]*

*Defined in [findMethods.ts:22](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7c4bed4/src/helpers/findMethods.ts#L22)*

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

▪ **nodes**: *Children*

▪ **iteratee**: *function*

▸ (`elem?`: BaseNode, `idx?`: number, `array?`: Children): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`elem?` | BaseNode |
`idx?` | number |
`array?` | Children |

**Returns:** *any[]*
