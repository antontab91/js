function getRandomNumbers(len, min, max) {
    let result = [];
    masLen = Math.round(len);
    console.log(masLen);

    for (let i = 0; i < masLen; i++) {
        result.push(Math.ceil(Math.random() * (max - min) + min));
    }

    console.log(result);
    return result;
}

getRandomNumbers(80, 45, 54);