// let keysList = ['name', 'address', 'age'];
// let valuesList = ['Bob', 'Ukraine', 34];

const buildObject = (keysList, valuesList) => {
    // let result = []
    return keysList.reduce((acc, el, index) => {
        return { ...acc, [el]: valuesList[index] }
    }, {});
};

// console.log(buildObject(keysList, valuesList));
// buildObject(keysList, valuesList);


