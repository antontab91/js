function getSum(num1, num2) {
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            sum = sum + i;
        }
    }
    return sum;
}

function increaser(a, index) {
    if (a > index) {
        return (a + index)
    } else {
        return a;
    }
}


function sum(from, to) {
    return from + to;
}


function compareSums(a, b, c, d) {
    let firstSum = sum(a, b);
    let secondSum = sum(c, d);
    // if (firstSum > secondSum) {
    //     return true;
    // } else {
    //     return false;
    // }
    return firstSum > secondSum ? true : false;
}


export { getSum, increaser, compareSums };


