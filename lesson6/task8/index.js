let arr = [4, 45, 12, 45, 4, 6, 8, 7];


function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] = arr[i] + delta;
            // console.log(arr[i] + delta);
        }
    }
    return arr;
}

console.log(increaseEvenEl(arr, 20));

