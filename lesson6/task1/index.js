function getArrayBounds(arr) {
    if (!arr.isArray) {
        return null;
    }
    return [arr.length, arr[0], arr[arr.length - 1]];
}


// console.log(getArrayBounds([12, 45, 45, 78, 56, 4, 787]));
