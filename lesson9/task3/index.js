const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    }
}


// function getCustomersList(customers) {

//     let keys = Object.keys(customers);                  // записал массив в значение keys имена айди обьектов 

//     let values = Object.values(customers);             // записал массив в переменную values данные о клиентах 

//     let newMassive = [];                            // определил массив , куда буду записывать отсортированные данные

//     for (let i of values) {
//         newMassive.push(Object.assign({}, i));      // обьеденил массивы и запушил в ньюмесив
//     }


//     for (let i = 0; i < keys.length; i++) {       // прошелся по массиву и записал в айди на каждой итерации значения из кейс 
//         newMassive[i]['id'] = keys[i];
//     }


//     newMassive.sort((a, b) => {                     // отсортировал по возрасту 
//         return a.age - b.age;
//     });
//     return newMassive;

// }

// // console.log(getCustomersList(customers));

// getCustomersList(customers);

// function getCustomersList(obj) {
//     return Object.entries(obj).map((el) => {

//     });
// }

function getCustomersList(obj) {
    return Object.entries(obj).map((entey) => {
        // debugger;
        // console.log(arr);
        return Object.assign(entey[1], { id: entey[0] })
        // .sort((a, b) => {
        //     return a.age - b.age;
        // });
    });
}

console.log(getCustomersList(customers));