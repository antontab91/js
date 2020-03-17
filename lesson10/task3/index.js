function multiRound(num) {
    if (!Number.isFinite(num)) {
        return null;
    }

    let newArr = [];
    newArr.push(Math.floor(num));
    newArr.push(Math.round(num));
    newArr.push(Math.ceil(num));
    newArr.push(Math.trunc(num))
    newArr.push(num.toFixed(2))
    return newArr;
}

console.log(multiRound(-17.25));