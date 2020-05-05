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

console.log(getCustomersList(customers));