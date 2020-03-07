function getPrimes(n) {
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
        }
    }
}

console(getPrimes(52));