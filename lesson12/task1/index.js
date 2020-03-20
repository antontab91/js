function calc(str) {
    splitStr = str.split(' ');
    console.log(splitStr);

    const [a, b, c] = [...splitStr];

    let result = 0;
    // console.log(a);
    // console.log(b);
    // console.log(c);


    switch (b) {
        case ('+'):
            // console.log('rabotaet +');
            // console.log(Number.parseInt(a) + Number.parseInt(c));
            result = Number(a) + Number(c);
            break;
        case ('-'):
            // console.log('rabotaet -');
            result = Number(a) - Number(c);
            break;
        case ('*'):
            // console.log('rabotaet *');
            result = Number(a) * Number(c);
            break;
        case ('/'):
            // console.log('rabotaet /');
            result = Number(a) / Number(c);
            break;

        // default:
        //     console.log('не та операция')
    }
    return `${str} = ${result}`;
}

// calc(str1);
// console.log(calc(str1));
// console.log(calc(str2));
// console.log(calc(str3));
// console.log(calc(str4));

