let arr = [54, 545, 87, 45, 23, 698, 54]

function swap(arr) {
    const [first, ...rest] = arr;
    return [...rest, first];

}

console.log(swap(arr));

