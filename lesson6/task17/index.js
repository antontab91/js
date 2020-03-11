function includes(arr, value) {
    return arr.find(function (num) {
        // console.log(num);
        // console.log(value);
        return num === value;
    });
}

console.log(includes([1, 4, 8, 3], 3));
