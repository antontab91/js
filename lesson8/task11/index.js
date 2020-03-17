const keys = ['name', 'age', 'city'];
const values = ['Anton', 28, 'Kiev'];


function buildObject(keys, values) {
    // return obj1.reduce(function (acum, value, index) {

    // })


    let crossObj = {};
    for (let i = 0; i < keys.length; i++) {
        crossObj[keys[i]] = values[i];
    }
    return crossObj;

}

console.log(buildObject(keys, values));