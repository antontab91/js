let arr = [23, 32, 45, 23, 65];

function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.map(function (num) {
        return num * num;
    })
}

console.log(squareArray(arr));