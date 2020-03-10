let arr = [23, 524, 3, 9, 2, 12, 15, 78, 45, 56, 788];

function getSpecialNumbers(arr) {
    return arr.filter(num => num % 3 === 0);
}

console.log(getSpecialNumbers(arr));