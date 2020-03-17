
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
    // console.log(JSON.stringify(obj1) === JSON.stringify(obj2));  // в гугле подсмотрел  Object.toJSON(user1) == Object.toJSON(user2);  , но  Object.toJSON не заработало потом мдн  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    // return (JSON.stringify(obj1) === JSON.stringify(obj2));

    let newObj1 = Object.entries(obj1).flat();
    console.log(newObj1);
    let newObj2 = Object.entries(obj2).flat();
    console.log(newObj2);
    if (newObj1.length !== newObj2.length) {
        return false;
    }
    for (let i = 0; i < obj2.length; i++) {
        if (obj1[i] !== obj2[i]) {
            return false;
        }
    }
    return true;

    // console.log(newObj1.length);
    // console.log(newObj2.length);
    // console.log((newObj1.length === newObj2.length));


}


console.log(compareObjects(obj1, obj2)); // false/
console.log(compareObjects(obj2, obj3)); // false
console.log(compareObjects(obj1, obj4)); // true/
