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

const getCustomersList = (obj) => {
    return Object.entries(obj).map((el) => {
        return Object.assign({}, { id: el[0] }, el[1])
            .sort((a, b) => {
                return a.age - b.age;
            });
    });
}

// console.log(getCustomersList(customers));