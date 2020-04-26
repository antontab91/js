const favorites = ['id-2', 'id-25'];
const tree = {
    id: 'id-1',
    name: 'Products',
    nodes: [{
        id: 'id-2',
        name: 'Food',
        nodes: [{
            id: 'id-22',
            name: 'Food',
            nodes: [{
                id: 'id-28',
                name: 'Food',
                nodes: [{
                    id: 'id-23',
                    name: 'Food',
                    nodes: [{
                        id: 'id-7',
                        name: 'Food',
                        nodes: [{
                            id: 'id-25',
                            name: 'Food25',
                            nodes: []
                        }]
                    }]
                }]
            }]
        }]
    }]
};

const markFavorites = (tree, favorites) => {
    const isFavorite = favorites.includes(tree.id);
    // console.log({ ...tree })
    console.log({ isFavorite })

    return {
        ...tree,            // весь массив
        isFavorite,
        nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
    }
}
const result = markFavorites(tree, favorites);
console.log(result);
export { markFavorites };