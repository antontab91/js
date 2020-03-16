const userData = {};

function addPropertyV1(userData, userId) {
    userData.id = userId;
    return userData;
}

function addPropertyV2(userData, userId) {
    return Object.assign(userData, { id: userId })
}

function addPropertyV3(userData, userId) {
    return Object.assign({}, userData, userId);      // тут  векрнул новый обьейкт без мутации старого 
}


function addPropertyV4(userData, userId) {
    return Object.assign({ ...userData }, userId);   // tut spred operator
}


console.log(addPropertyV1(userData, 4545));
console.log(addPropertyV2(userData, 4545));
console.log(addPropertyV3(userData, 4545));
console.log(addPropertyV4(userData, 4545));