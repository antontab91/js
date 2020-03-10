let arr = [232, 5645, 4, 4152, 12, 87, 7498, 54, 451, 422];

function sortDesc(arr) {
    return arr.slice().sort(function (a, b) {
        return b - a;
    });
}
console.log(sortDesc(arr)); 