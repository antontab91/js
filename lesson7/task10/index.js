function sum(arr) {
    if (!Array.isArray(arr)) {
        return -1;
    }
    return arr.reduce(function (concat, elem) {
        return concat + elem;
    })
}

console.log(sum([2, 5, 6, 3, 0, 3, -1]));