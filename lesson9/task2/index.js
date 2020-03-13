function copyObj(obj) {
    let newObj = { ...obj };
    return newObj;
}

console.log(copyObj(obj))