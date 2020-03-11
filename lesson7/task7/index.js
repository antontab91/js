let arr = [45, 5, 45, 12, 485, 87, 87845, 45, 12, 56, 896, 89];

function increaseEvenEl(arr, delta) {
    return arr.map(function (elem) {
        if (elem % 2 === 0) {
            return elem + delta;
        }
    })
}

console.log(increaseEvenEl(arr));