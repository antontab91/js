function getRandomNumbers(len, min, max) {
    if ((Math.ceil(max) === Math.ceil(min) && (max - min < 1)) || length <= 0 || max < min) {

        console.log(null);
        return null;
    }

    let result = [];

    for (let i = 0; i < len; i++) {
        result.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    console.log(result);
    return result;
}

getRandomNumbers(10, 45, 54);