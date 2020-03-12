// function pickProps(obj, arr) {
//     let newObj = {};
//     arr.map(function (item) {

//         for (let index in obj) {
//             if (index === item) {
//                 newObj[index] = obj[index];
//             }
//         }
//     })
//     return newObj;
// }












function pickProps(obj, arr) {
    let newObj = {};                // этот обьект я буду возвращать , в него буду записывать нужные элементы 
    arr.map(function (item) {       // тут с помощью метода меп перебераю айтемы массива 
        for (let propName in obj) {     // тут перебераю обьект 
            if (propName === item) {       // если имя свойства обьекта совпадакет с элементом массива 
                newObj[propName] = obj[propName];   // записываю это свойство в новый обьект
            }
        }
    })
    return newObj;
}


console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']))