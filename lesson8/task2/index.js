function concatProps(obj) {
    let arr = [];
    for (let value in obj) {
        arr.push(value);
    }
    return arr;
}