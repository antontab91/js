function getSum(num1, num2) {
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            sum = sum + i;
        }
    }
    return sum;
}

function increaser(a, index) {
    if (a > index) {
        return (a + index)
    } else {
        return a;
    }
}


function sum(from, to) {
    return from + to;
}


function compareSums(a, b, c, d) {
    let firstSum = sum(a, b);
    let secondSum = sum(c, d);
    // if (firstSum > secondSum) {
    //     return true;
    // } else {
    //     return false;
    // }
    return firstSum > secondSum ? true : false;
}

function findDivCount(a, b, n) {
    let quantity = 0;
    for (let i = a; i <= b; i++) {
        if (i % n === 0) {
            quantity = quantity + 1;
        }
    }
    return quantity;
}

function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.map(function (num) {
        return num * num;
    })
}

function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    // let newArr = [...arr];
    // return newArr.reverse();
    return arr.slice().reverse();
}

function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null
    }

    return arr.map(function (elem) {
        if (elem % 2 === 0) {
            return elem + delta;
        } else {
            return elem;
        }
    })

}

function cloneArr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    // let newArr = [...arr];
    // console.log(arr);
    // return newArr;

    return arr.slice();
}


function pickProps(obj, arr) {
    let newObj = {};
    arr.map(function (item) {
        for (let propName in obj) {
            if (propName === item) {
                newObj[propName] = obj[propName];
            }
        }
    })
    return newObj;
}

function getAdults(obj) {
    let newObj = {};
    for (let key in obj) {
        if (obj[key] >= 18) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}


function getKeys(obj) {
    return Object.keys(obj);
}


function buildObject(keys, values) {
    let crossObj = {};
    for (let i = 0; i < keys.length; i++) {
        crossObj[keys[i]] = values[i];
    }
    return crossObj;

}




export { getSum, increaser, compareSums, findDivCount, squareArray, reverseArray, increaseEvenEl, cloneArr, pickProps, getAdults, getKeys, buildObject };


