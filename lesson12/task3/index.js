let arr = ['  1.9 ', '16.4', 17, ' 1 dollar '];

// function cleanTransactionsList(arr) {
//     let onlyNums = [];

//     arr.map(function (num) {
//         if (isFinite(num)) {
//             onlyNums.push('$' + Math.abs(num).toFixed(2));
//         }
//     })

//     return onlyNums;
// }


const cleanTransactionsList = (money) => {
    return money.filter(el => isFinite(el))
        .map(tr > `$${Number.parseFloat(tr).toFixed(2)}`);
}
console.log(cleanTransactionsList(arr));