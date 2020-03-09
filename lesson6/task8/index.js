let arr = [4, 45, 12, 45, 4, 6, 8, 7];


function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let newArr = arr;
    for (let num of arr) {
        if (arr[num] % 2 === 0) {
            newArr[num] = arr[num] + delta;
        }
    }
}

