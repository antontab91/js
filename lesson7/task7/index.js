let arr = [1, 2, 5, 45, 12, 4, 7, 78, 3, 12, 56, 96, 89];

function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null
    }

    return arr.map(function (elem, index, wholeArr) {
        if (elem % 2 === 0) {
            return elem + delta;
        } else {
            return elem;
        }
    })

}

console.log(increaseEvenEl(arr, 5));