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
    let newObj = {};
    arr.map(function (item) {
        for (let propName in obj) {
            if (propName === item) {
                newObj[propName] = obj[propName];
            }
        }
    })
    return newObj;
}


console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']))