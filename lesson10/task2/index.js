let arr = [1.45, 45, 485.5, 788, 8.87, 7887.8, 87, 988, 56, 232, 12]

function getParsedIntegers(arr) {
    return arr.map(function (elem) {
        return Number.parseInt(elem);
    });
}

function getParsedIntegersV2(arr) {
    return arr.map(function (elem) {
        return parseInt(elem);
    });
}

function getParsedFloats(arr) {
    return arr.map(function (elem) {
        return Number.parseFloat(elem);
    });
}

function getParsedFloatsV2(arr) {
    return arr.map(function (elem) {
        return parseFloat(elem);
    });
}

console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));