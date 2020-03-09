function getArrayBounds(arr) {
    if (!arr.isArray) {
        return null;
    }
    return [arr.length, arr[0], arr[arr.length - 1]];
}

