function checkSum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let elementsSumm = 0;
    for (let num of arr) {
        elementsSumm = elementsSumm + num;
    }

    return (elementsSumm > 100) ? true : false;
}