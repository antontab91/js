const obj1 = {
    name: 'Tom',
    age: 17
};
const obj2 = {
    name: 'Bob',
    age: 17
};
const obj3 = {
    name: 'Bob',
    age: 17,
    student: false
};
const obj4 = {
    name: 'Tom',
    age: 17,
};

function compareObjects(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    } else {
        return false;
    }
}


console.log(compareObjects(obj1, obj2)); // false
console.log(compareObjects(obj2, obj3)); // false
console.log(compareObjects(obj1, obj4)); // true
