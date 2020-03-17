function multiRound(num) {
    if (!isFinite(num)) {
        return null;
    }

    let newArr = [];
    newArr.push(Math.floor(num * 100) / 100);
    newArr.push(Math.round(num * 100) / 100);
    newArr.push(Math.ceil(num * 100) / 100);
    newArr.push(Math.trunc(num * 100) / 100);
    newArr.push(num.toFixed(2));
    return newArr;
}

console.log(multiRound(56.6164565));