let m = 23;
let n = 34;
let result = 1;

for (let i = m; i < n; i++) {
    if (i % 2 != 0) {
        result = result * i;
        console.log(result);
    }
}

console.log('Result: ' + result);