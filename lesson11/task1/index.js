function splitText(text, len) {
    console.log()
    if (typeof (text) !== "string") {
        return null;
    }
    let strArr = [];
    let startPosition = 0;
    while (true) {
        let chuck = text.substr(startPosition, len);
        if (chuck.length === 0) {
            break;
        }
        strArr.push(chuck[0].toUpperCase() + chuck.slice(1));

        startPosition = startPosition + len;

    }

    return strArr.join('\n');


}

// console.log(splitText(1452, 444))
// splitText("banani lopala bomba ee , бананы лопала бомба олрайт ", 5);

console.log(splitText("sa5assasa", 5))