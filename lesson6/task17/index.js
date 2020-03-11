function includes(arr, value) {
    return arr.find(function (num) {
        if (num === value) {
            return true;
        } else {
            return false;
        }
    });
}

console.log(includes([1, 4, 8, 3], 3));
