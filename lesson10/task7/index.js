let arr = [213, 1, 12.12, -412.12, -54, 45, -44.545];

function getTotalPrice(arr) {
    return arr.reduce(function (acc, num) {
        return acc + Math.abs(num);
    })
}

getTotalPrice(arr);