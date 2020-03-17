function superRound(num, n) {
    let fraction = '1';
    for (let i = 0; i < n; i++) {
        fraction = fraction + '0';
        console.log(fraction);
    }

    let newArr = [
        Math.floor(num * fraction) / fraction,    // v minshuyu storonu
        Math.round(num * fraction) / fraction,     // kak v matematike
        Math.ceil(num * fraction) / fraction,       // v bolsuyu
        Math.trunc(num * fraction) / fraction,
        Number(num.toFixed(n))

    ];
    console.log(newArr);
    return newArr;
}

superRound(1.5454566465, 5);