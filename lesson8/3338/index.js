let kays = ['name', 'address', 'age'];
let values = ['Bob', 'Ukraine', 34];

const buildObject = (kays, values) => {
    // let result = []
    return kays.reduce((acc, el, index) => {
        return { ...acc, [el]: values[index] }
    }, {});
};

console.log(buildObject(kays, values));
buildObject(kays, values);


