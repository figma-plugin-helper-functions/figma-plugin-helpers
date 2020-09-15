
# Module: "setCharacters"

## Index

### Functions

* [setCharacters](_setcharacters_.md#const-setcharacters)

## Functions

### `Const` setCharacters

▸ **setCharacters**(`node`: TextNode, `characters`: string, `fallbackFont?`: FontName): *Promise‹boolean›*

*Defined in [setCharacters.ts:22](https://github.com/figma-plugin-helper-functions/figma-plugin-helpers/blob/7c4bed4/src/helpers/setCharacters.ts#L22)*

This helper will check font and set fallback before set characters to node. Useful to work with TextNode content changes.
For example:
```diff
const text = "New text for label";
const labelNode = figma.currentPage.findOne((el) => el.type === "TEXT");
- await figma.loadFontAsync({
-    family: labelNode.fontName.family,
-    style: labelNode.fontName.style
- })
- labelNode.characters = text;
+ setCharacters(labelNode, text);
```

Provided example doesn't handle many annoying cases like, not existed or multiple fonts, which expand code a lot. `setCharacters` cover this cases and reducing noise.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | TextNode | Target node to set characters |
`characters` | string | String of characters to set |
`fallbackFont?` | FontName | Font that will be applied to target node, if original will fail to load. By default is "Roboto Regular"  |

**Returns:** *Promise‹boolean›*
