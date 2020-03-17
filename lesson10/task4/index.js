let arr = [65, 62, -78.54, -56, -212, 45.12];

function getMaxAbsoluteNumber() {
    if (!Array.isArray(arr) || arr.length <= 0) {
        return null;
    }
    let bigestNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (bigestNum < Math.abs(arr[i])) {
            bigestNum = Math.abs(arr[i])
        }
    }

    return bigestNum;
};

console.log(getMaxAbsoluteNumber(arr));