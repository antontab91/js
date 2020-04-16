const maxFibonacci = (num) => {
    if (num <= 0) return;

    return num
};
console.log(maxFibonacci(19));

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(8));

