let arr = [1, ' sd', 454, false, true, 78, NaN, null, 0, -0, undefined, Infinity, 21.54, 54, 989.4];
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getFiniteNumbers(arr) {
    return arr.filter(function (elem) {
        // console.log(Number.isFinite(elem));
        return Number.isFinite(elem);
    });
}

function getFiniteNumbersV2(arr) {
    return arr.filter(function (elem) {
        return isFinite(elem);
    })

}

function getNaN(arr) {
    return arr.filter(function (elem) {
        return Number.isNaN(elem);
    })
}

function getNaNV2(arr) {
    return arr.filter(function (elem) {
        return isNaN(elem);
    })
}

function getIntegers(arr) {
    return arr.filter(function (elem) {
        return Number.isInteger(elem);
    })
}


console.log(getFiniteNumbers(arr));
console.log(getFiniteNumbersV2(arr));
console.log(getNaN(arr));
console.log(getNaNV2(arr));
console.log(getIntegers(arr));