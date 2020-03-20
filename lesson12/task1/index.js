function calc(str) {
    let splitStr = str.split(' ');
    const [a, b, c] = [...splitStr];
    let result = 0;

    switch (b) {
        case '+':
            result = Number(a) + Number(c);
            break;
        case '-':
            result = Number(a) - Number(c);
            break;
        case '*':
            result = Number(a) * Number(c);
            break;
        case '/':
            result = Number(a) / Number(c);
            break;
    }
    return `${str} = ${result}`;
}


