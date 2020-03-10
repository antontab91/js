const arr = [1, 2, 3, 4, 1, [4445, 1212]];
// const arr = [1, 2, 3, 4];

function flatArray(arr) {
    return arr.reduce(function (acc, elem) {
        return acc.concat(elem);
    }, []);
}

console.log(flatArray(arr));