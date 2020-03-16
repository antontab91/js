const obj = {
    name: 'Tom',
    age: 17,
};


// function getKeys(obj) {
//     return Object.keys(obj).map(function (item) {
//         console.log(item);
//         return item;
//     });
// }

function getKeys(obj) {
    return Object.keys(obj).forEach(function (item) {
        console.log(item);
        return item;
    });
}

console.log(getKeys(obj));