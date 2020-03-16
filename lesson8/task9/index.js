const transaction = {
    value: 170
}


function addPropertyV1(obj, key, value) {
    obj[key] = value;
    return obj;
};

function addPropertyV2(obj, key, value) {
    console.log({ [key]: value })
    return Object.assign(obj, { [key]: value });
};

function addPropertyV3(obj, key, value) {
    return Object.assign({}, obj, { [key]: value });
};

function addPropertyV4(obj, key, value) {
    return Object.assign({ ...obj }, { [key]: value });
};


// console.log(addPropertyV1(transaction, 'currency', 'USD'));

// console.log(addPropertyV2(transaction, 'currency', 'USD'));

// console.log(addPropertyV3(transaction, 'currency', 'USD'));

// console.log(addPropertyV1(transaction, 'currency', 'USD'));

