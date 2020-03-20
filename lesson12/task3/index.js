let arr = ['  1.9 ', '16.4', 17, ' 1 dollar '];

function cleanTransactionsList(arr) {
    let onlyNums = [];

    arr.map(function (num) {
        if (isFinite(num)) {
            onlyNums.push('$' + Math.abs(num).toFixed(2));
        }
    })

    return onlyNums;
}

console.log(cleanTransactionsList(arr));