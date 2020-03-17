function getRandomNumbers(len, min, max) {
    if ((Math.ceil(max) === Math.ceil(min) && (max - min < 1)) || len <= 0 || min > max) {
        console.log(null);
        return null;
    }

    let result = [];
    masLen = Math.round(len);
    console.log(masLen);


    for (let i = 0; i < masLen; i++) {
        result.push(Math.trunc(Math.random() * (max - min) + min));
    }

    console.log(result);
    return result;
}

getRandomNumbers(80, 45, 54);