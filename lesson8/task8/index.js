const user = {
    name: 'Sam'
};




function addPropertyV1(userData, userId) {
    userData.id = userId;
    return userData;
};

function addPropertyV2(userData, userId) {
    return Object.assign(userData, { id: userId })
};

function addPropertyV3(userData, userId) {
    let id = userId;
    return Object.assign({}, userData, id);      // тут  векрнул новый обьейкт без мутации старого 
};


function addPropertyV4(userData, userId) {
    let id = userId;
    return Object.assign({ ...userData }, id);   // tut spred operator
};

