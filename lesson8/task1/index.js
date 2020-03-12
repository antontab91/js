function transformToObject(arr) {
    let obj = {};

    arr.array.forEach(element => {
        obj[element] = element;
    });

    return obj;
}