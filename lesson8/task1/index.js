function transformToObject(arr) {
    let obj = {};

    arr.forEach(element => {
        obj[element] = element;
    });

    return obj;
}

let arr = ['text', 12];

console.log(transformToObject(arr));