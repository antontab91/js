let arr = [213, 1, 12.12, -412.12, -54, 45, -44.545];

function getTotalPrice(arr) {
    let summ = arr.reduce(function (acc, num) {
        return acc + Math.abs(num);
    })
    console.log(Math.floor(summ * 100) / 100);
    return '$' + Math.floor(summ * 100) / 100;
}

getTotalPrice(arr);