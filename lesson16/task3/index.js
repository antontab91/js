export function createArrayOfFunctions(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr[i] = function () {
            return i;
        }
    }
    return arr;
}