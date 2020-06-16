
# Module: "hasChildren"

## Index

### Functions

* [hasChildren](_haschildren_.md#const-haschildren)

## Functions

### `Const` hasChildren

▸ **hasChildren**(`node`: BaseNode): *node is BaseNode & ChildrenMixin*

*Defined in [hasChildren.ts:16](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/a7845f4/src/helpers/hasChildren.ts#L16)*

Checks node to have children nodes
For example:

```ts
// BEFORE
console.log(node.children) // throw TS error "Property 'children' does not exist on type ..."

// AFTER
if (hasChildren(node)) {
 console.log(node.children) // valid code
}
```

**Parameters:**

Name | Type |
------ | ------ |
`node` | BaseNode |

**Returns:** *node is BaseNode & ChildrenMixin*
