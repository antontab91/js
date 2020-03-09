const arr = [656, 1, 545, 87, 8787, 52];

function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let newArr = arr.reverse();
    return newArr;
}
reverseArray(arr);
console.log(arr);
console.log(reverseArray(arr));