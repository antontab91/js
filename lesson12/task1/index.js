function calc(str) {
    let splitStr = str.split(' ');
    const [a, operator, b] = [...splitStr];
    let result = 0;
    switch (operator) {
        case '+':
            result = Number(a) + Number(b);
            break;
        case '-':
            result = Number(a) - Number(b);
            break;
        case '*':
            result = Number(a) * Number(b);
            break;
        case '/':
            result = Number(a) / Number(b);
            break;
    }
    return `${str} = ${result}`;
}


