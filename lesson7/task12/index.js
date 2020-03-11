arr = [2, 5, 6, 3];

// function arrAverage(arr) {
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     let sum = arr.reduce(function (acc, num) {            // присвоил сумму переменной , сумму всего массива ищу с помощью метрода редьюс 
//         return acc + num;
//     })
//     return sum / arr.length;                             // чтобы найти общее кратное делю сумму на длинну массива 
// }

function arrAverage(arr) {
    if (!Array.isArray(arr))
        return null;

    return arr.reduce((acc, cur) => acc + cur) / arr.length;
};


console.log(arrAverage(arr));

