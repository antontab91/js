function getSum(num1, num2) {
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            sum = sum + i;
            // console.log(sum);
        }
    }
    return sum;
}

console.log(getSum(5, 78));