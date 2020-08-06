console.log('Hello, world!');

console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(-1));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(NaN));

let language = 'un';

if (language) {
    console.log('fds')
} else {
    console.log('sad')
}


const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
]

let oldestFriend = friends.reduce((oldest, friend) => {
    return (oldest.age) > friend.age ? oldest : friend;
}, {});

console.log(oldestFriend)



// const arr = [
//     { id: "12", value: 45 },
//     { id: "1", value: 54 },
//     { id: "2", value: 5 }
// ];


// let total = 0;
// const myMap = (arr) => {
//     arr.map((el) => {
//         total = total + el.value
//     })

//     return total
// }

// console.log(myMap(arr))