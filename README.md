# Figma Plugin Helper functions
[![npm](https://img.shields.io/npm/v/@figma-plugin/helpers?logo=npm&cacheSeconds=1800)](https://www.npmjs.com/package/@figma-plugin/helpers)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@figma-plugin/helpers?cacheSeconds=1800)](https://bundlephobia.com/result?p=@figma-plugin/helpers)

A collection of useful helper functions to import to your Figma plugin project

## Installation

```bash
npm i @figma-plugin/helpers
# or
yarn add @figma-plugin/helpers
```
## Usage

```jsx
import { isTextNode } from "@figma-plugin/helpers";

const firstTextNode = figma.currentPage.findOne(node => isTextNode(node));
```

## Development
```bash
npm run lint
```

## Roadmap
- Write a contribution guidelines
- Source additional helper functions from the community
- Write a docs
