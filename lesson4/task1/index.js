let n = 200;
let sum = 0;


// while (n > 0) {
//     sum = sum + n;
//     console.log(sum);
//     n = n - 1;
//     console.log(n);
// }

for (let i = 0; i <= n; i++) {
    sum = sum + i;
}

console.log('Result: ' + sum);