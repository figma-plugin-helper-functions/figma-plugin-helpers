//this function allows you to get the node index
const getIndexNode = (node) => {
  let id = node.id
  let index = node.parent.children.findIndex(item => item.id === id)
  return index < 0 ? 0 : index
}

export default getIndexNode;
