//this function allows you to pass in a node and return its pageNode
const getPage = (node) => {
    let page = node;
	while (page.type != 'PAGE') {
		page = page.parent;
	}
	return page;
};

export default getPage;