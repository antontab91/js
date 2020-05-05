// let keyList = ['name', 'address', 'age'];
// let valuesList = ['Bob', 'Ukraine', 56];

const buildObject = (keyList, valuesList) => {
    // let result = []
    return keyList.reduce((acc, el, index) => {
        return { ...acc, [el]: valuesList[index] }
    }, {});
};

// console.log(buildObject(keyList, valuesList));
// buildObject(keyList, valuesList);


