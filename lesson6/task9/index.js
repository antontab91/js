const arr = [656, 1, 545, 87, 8787, 52];

// function reverseArray(arr) {
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     let newArr = arr.reverse();
//     return newArr;
// }




function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);

    }

    return newArr;
}

reverseArray(arr);
console.log(arr);
console.log(reverseArray(arr));