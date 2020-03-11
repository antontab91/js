let arr = [1, 2, 5, 45, 12, 4, 7, 78, 3, 12, 56, 96, 89];

function cloneArr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let newArr = [...arr];
    console.log(arr);
    return newArr;
}

cloneArr(arr);