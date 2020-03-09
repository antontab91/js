let arr = [12, 45, 45, 45, 78, 15, 12, 545]

function getArrayBounds(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return [arr.length, arr[0], arr[arr.length - 1]];
}

console.log(getArrayBounds(arr));

