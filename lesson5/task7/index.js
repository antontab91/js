function increaser(a, index) {
    if (a > index) {
        return (a + index)
    } else {
        return a;
    }
}

console.log(increaser(45, 8));