let arr = [45, 54, 45, 12, 554, 7878, 544];

function getSum(arr) {
    let summ = 0;
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        summ = summ + arr[i];
    }
    console.log(summ);
    return summ;
}

getSum(arr);