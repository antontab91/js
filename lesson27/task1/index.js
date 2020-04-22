localStorage.clear();
localStorage.setItem('name', JSON.stringify('Tom'));
localStorage.setItem('age', JSON.stringify(17));






export const getLocalStorageData = () => {
    return Object.entries(localStorage)
        .reduce((acc, [key, value]) => {
            return {
                ...acc,
                [key]: JSON.parse(value),
            }
        }, {});
}


console.log(getLocalStorageData());
