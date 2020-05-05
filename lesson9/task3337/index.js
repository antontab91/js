const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    }
};


function getCustomersList(obj) {
    const newObj = { ...obj };
    return Object.entries(newObj).map((entey) => {
        // debugger;
        // console.log(arr);
        return Object.assign(entey[1], { id: entey[0] });

    }).sort((a, b) => {
        return a.age - b.age;
    });
}

// function getCustomersList(object) {
//     const copyObj = Object.assign({}, object)
//     const objectToArray = Object.entries(copyObj)
//     const addIdValue = objectToArray.map((a) => ({ id: a[0], ...a[1] }))
//     const sortArrayOfObjects = addIdValue.sort((a, b) => a.age - b.age)
//     return sortArrayOfObjects;
// }

console.log(getCustomersList(customers));