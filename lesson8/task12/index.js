
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
    console.log(JSON.stringify(obj1) === JSON.stringify(obj2));  // в гугле подсмотрел  Object.toJSON(user1) == Object.toJSON(user2);  , но  Object.toJSON не заработало потом мдн  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    return (JSON.stringify(obj1) === JSON.stringify(obj2));


}

console.log(compareObjects(obj1, obj2)); // false/
console.log(compareObjects(obj2, obj3)); // false
console.log(compareObjects(obj1, obj4)); // true/
