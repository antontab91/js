function getRandomNumbers(len, min, max) {
    if ((Math.ceil(max) === Math.ceil(min) && (max - min < 1)) || len <= 0 || max < min) {
        return null;
    }

    let result = [];

    for (let i = 0; i < len; i++) {
        result.push(Math.trunc(Math.random() * (max - min) + min));
    }

    console.log(result);
    return result;
}

getRandomNumbers(10, 45, 54);