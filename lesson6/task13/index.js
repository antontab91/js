var array = [40, 100, 1, 5, 25, 10];
function sortAsc(array) {
    return array.sort(function (a, b) { return b - a }).reverse();
}

console.log(sortAsc(array));