let arr = [45, 5, 45, 12, 485, 87, 87845, 45, 12, 56, 896, 89];

function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    // let newArr = [...arr];
    // return newArr.reverse();
    return arr.slice().reverse();
}

console.log(reverseArray(arr));