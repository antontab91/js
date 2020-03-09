function checker(arr) {
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);

    return ((maxNum + minNum) > 1000) ? true : false;
}