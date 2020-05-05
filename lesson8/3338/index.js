let kaysList = ['name', 'address', 'age'];
let valuesList = ['Bob', 'Ukraine', 34];

const buildObject = (kaysList, valuesList) => {
    // let result = []
    return kaysList.reduce((acc, el, index) => {
        return { ...acc, [el]: valuesList[index] }
    }, {});
};

// console.log(buildObject(kays, values));
// buildObject(kays, values);


