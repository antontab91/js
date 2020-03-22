// let arr = [-777, 3, -2, 6, 45, -20];

export function getMinSquaredNumber(arr) {
    let min = Math.abs(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i]) < min) {
            min = arr[i]
        }
    }
    return min * min;
}

// getMinSquaredNumber(arr);