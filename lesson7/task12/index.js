arr = [2, 5, 6, 3];

function arrAverage(arr) {

    return arr.reduce(function (acc, num) {
        return (acc + num) / arr.length;
    })
}


console.log(arrAverage(arr));

