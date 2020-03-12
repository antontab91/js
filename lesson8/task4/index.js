let obj = {
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18
};


function getAdults(obj) {
    let newObj = {};
    for (let key in obj) {
        console.log(obj[key]);
        if (obj[key] >= 18) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

console.log(getAdults(obj));