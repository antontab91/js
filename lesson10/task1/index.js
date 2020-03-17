let arr = [1, ' sd', 454, false, true, 78];

function getFiniteNumbers(arr) {
    return arr.slice().filter(function (elem) {
        return Number.isFinite(elem)
    });
}

// function getFiniteNumbersV2() {

// }

// function getNaN() {

// }

// function getNaNV2() {

// }

// function getIntegers() {

// }


console.log(getFiniteNumbers(arr));