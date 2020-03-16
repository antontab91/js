const userData = {};

function addPropertyV1(userData, userId) {
    userData.id = userId;
    return userData;
}

function addPropertyV2(userData, userId) {
    return Object.assign(userData, { id: userId })
}
function addPropertyV3(userData, userId) {
    let newObj = { ...userData };
    return Object.assign(newObj, userId);
}
function addPropertyV4(userData, userId) {

}


console.log(addPropertyV1(userData, 4545));
console.log(addPropertyV2(userData, 4545));
console.log(addPropertyV3(userData, 4545));
console.log(addPropertyV4(userData, 4545));