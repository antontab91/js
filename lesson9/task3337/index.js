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


// function getCustomersList(obj) {

//     return Object.entries(obj).map((entey) => {
//         // debugger;
//         // console.log(arr);
//         return Object.assign(...entey[1], { id: entey[0] });

//     }).sort((a, b) => {
//         return a.age - b.age;
//     });
// }


// function getCustomersList(obj) {
//     return Object.entries(newObj)
//         .map(([id, value]) => ({ id, ...value }))
//         .sort((a, b) => {
//             return a.age - b.age;
//         });
// }



const getCustomersList = (obj) => Object.entries(obj)
    .map(([id, value]) => ({ id, ...value }))
    .sort((a, b) => a.age - b.age);

console.log(getCustomersList(customers));

// return Object.entries(obj).map(([id, value]) => {
//     return { ...value, id };

// })
