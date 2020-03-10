let array = [0.32, 0.32, 45, 454, 45, 4545, 45];       //  массив , который буду проверять на дубликаты

function removeDuplicates(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (!inArray(result, array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

function inArray(array, elem) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elem) {
            return true;
        }
    }

    return false;
}

console.log(removeDuplicates(array));