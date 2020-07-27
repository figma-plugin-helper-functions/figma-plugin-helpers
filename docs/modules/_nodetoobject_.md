
# Module: "nodeToObject"

## Index

### Functions

* [nodeToObject](_nodetoobject_.md#const-nodetoobject)

## Functions

### `Const` nodeToObject

▸ **nodeToObject**(`node`: any, `withoutRelations?`: boolean): *any*

*Defined in [nodeToObject.ts:14](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/0fbf45c/src/helpers/nodeToObject.ts#L14)*

Transform node to object with keys, that are hidden by default.
For example:
```ts
const node = figma.currentPage.findOne((el) => el.type === "TEXT");
console.log(Object.keys(node).length) // 1
console.log(Object.keys(nodeToObject(node)).length) // 42
console.log(Object.keys(nodeToObject(node, true)).length) // 39
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | any | - |
`withoutRelations?` | boolean |   |

**Returns:** *any*
