let arr = [102, 21, 1, 12, 23, 3, 12, 47, 7, 412, 12, 56];

function sum(arr) {
    if (!Array.isArray(arr)) {
        return -1;
    }
    return arr.reduce(function (concat, elem) {
        return concat + elem;
    })
}

console.log(sum(arr));