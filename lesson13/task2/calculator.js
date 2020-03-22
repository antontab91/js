export function getSquaredArray(arr) {
    return arr.map(function (num) {
        return num * num;
    });
}
export function getOddNumbers(arr) {
    return arr.filter(function (num) {
        return num % 2 !== 0;
    });
}

// export { getSquaredArray, getOddNumbers };

export default (a, b) => {
    return a + b;
};