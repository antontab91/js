let str1 = '1+2';
let str2 = '1-2';
let str3 = '1*2';
let str4 = '1/2';
let str5 = '1%2';

function calc(str) {
    splitStr = str.split('');
    // console.log(splitStr);

    [a, b, c] = [...splitStr];

    let result;
    // console.log(a);
    // console.log(b);
    // console.log(c);


    switch (b) {
        case ('+'):
            // console.log('rabotaet +');
            console.log(Number.parseInt(a) + Number.parseInt(c));
            result = Number.parseInt(a) + Number.parseInt(c);
            break;
        case ('-'):
            // console.log('rabotaet -');
            result = Number.parseInt(a) - Number.parseInt(c);
            break;
        case ('*'):
            // console.log('rabotaet *');
            result = Number.parseInt(a) * Number.parseInt(c);
            break;
        case ('/'):
            // console.log('rabotaet /');
            result = Number.parseInt(a) / Number.parseInt(c);
            break;

        default:
            console.log('не та операция')
    }
    return result;
}

console.log(calc(str1));
console.log(calc(str2));
console.log(calc(str3));
console.log(calc(str4));
console.log(calc(str5));
