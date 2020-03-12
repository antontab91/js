let obj = { name: 'John Doe', age: 17, interest: 'football' }


function concatProps(obj) {
    let arr = [];
    for (let value in obj) {
        // console.log(obj[value]);
        arr.push(obj[value]);
    }
    return arr;
}

console.log(concatProps(obj));