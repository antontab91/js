let sum = 0;

for (let i = 0; i <= 1000; i++) {
    sum = sum + i;
    if (i % 2 != 0) {
        console.log('Found');
    }
    if (sum * 5 > 5000) {
        console.log('Bigger');
    }
    else {
        console.log('Smaller');
    }
}