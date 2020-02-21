export const isPageNode = (node: BaseNode): node is PageNode => {
  return node.type === "PAGE";
};

export const isGroupNode = (node: BaseNode): node is GroupNode => {
  return node.type === "GROUP";
};

export const isFrameNode = (node: BaseNode): node is FrameNode => {
  return node.type === "FRAME";
};

export const isTextNode = (node: BaseNode): node is TextNode => {
  return node.type === "TEXT";
};

export const isInstanceNode = (node: BaseNode): node is InstanceNode => {
  return node.type === "INSTANCE";
};

export const isComponentNode = (node: BaseNode): node is ComponentNode => {
  return node.type === "COMPONENT";
};

export const isOneOfNodeType = (node: BaseNode, typeList: NodeType[]) => {
  return typeList.includes(node.type);
};
