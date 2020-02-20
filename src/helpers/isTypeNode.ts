export const isPageNode = (node: any): node is PageNode => {
  return node.type === "PAGE";
};

export const isGroupNode = (node: any): node is GroupNode => {
  return node.type === "GROUP";
};

export const isFrameNode = (node: any): node is FrameNode => {
  return node.type === "FRAME";
};

export const isTextNode = (node: any): node is TextNode => {
  return node.type === "TEXT";
};

export const isInstanceNode = (node: any): node is InstanceNode => {
  return node.type === "INSTANCE";
};

export const isComponentNode = (node: any): node is ComponentNode => {
  return node.type === "COMPONENT";
};

export const isOneOfNodeType = (node: any, typeList: string[]) => {
  return typeList.includes(node.type);
};
