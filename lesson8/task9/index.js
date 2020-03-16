const transaction = {
    value: 170
}


function addPropertyV1(obj, key, value) {
    obj.key = value;
    return obj;
};

function addPropertyV2(obj, key, value) {

};

function addPropertyV3(obj, key, value) {

};

function addPropertyV4(obj, key, value) {

};


const result = addPropertyV1(transaction, 'currency', 'USD');
console.log(result); // { value: 170, currency: 'USD' }
