function splitText(string, len = 10) {
    sa
    if (typeof (string) !== 'string') {
        return null;
    }
    let strArr = [];
    let startPosition = 0;

    while (true) {
        let chunk = string.substr(startPosition, len);
        if (chunk.length === 0) break;
        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition = startPosition + len;
    }
    return strArr.join('\n');
}

// console.log(splitText(1452, 444))
// splitText("banani lopala bomba ee , бананы лопала бомба олрайт ", 5);

console.log(splitText("sa5assasa", 5))