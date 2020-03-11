arr = [2, 5, 6, 3];

function arrAverage(arr) {
    if (!Array.isArray(arr)) {
        return -1;
    }
    let sum = arr.reduce(function (acc, num) {            // присвоил сумму переменной , сумму всего массива ищу с помощью метрода редьюс 
        return acc + num;
    })
    return sum / arr.length;                             // чтобы найти общее кратное делю сумму на длинну массива 
}


console.log(arrAverage(arr));

