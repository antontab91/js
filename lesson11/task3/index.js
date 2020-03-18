const splitString = (text, num = 10) => {
    if (typeof text != "string") {
        return null;
    }
    let result = [];
    let startPosiotion = 0;
    while (true) {
        if (startPosiotion >= (text.length - 1)) {
            break;
        }
        let substr = text.substr(startPosiotion, num)
        console.log(substr)
        if ((substr.length) < num) {
            let diference = num - (substr.length);
            for (let i = 0; i < diference; i++) {
                substr = substr + ".";
            }
        }

        result.push(substr);
        startPosiotion = startPosiotion + num;
    }

    return result;

}


// console.log(splitString(1452, 444))
// splitString("banani lopala bomba ee , бананы лопала бомба олрайт ", 5);

console.log(splitString("sa5assasa", 5))

