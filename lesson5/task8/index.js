function sum(from, to) {
    return from + to;
}


function compareSums(a, b, c, d) {
    let firtSum = sum(a, b);
    let secondSum = sum(c, d);
    if (firtSum > secondSum) {
        return true;
    } else {
        return false;
    }
}