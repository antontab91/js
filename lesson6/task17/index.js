function includes(arr, value) {
    return arr.map(function (num) {
        if (num === value) {
            return true;
        } else {
            return false;
        }
    })
}
