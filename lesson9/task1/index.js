// const obj = {
//     'John Doe': 19,
//     'Tom': 17,
//     'Bob': 18
// };


// function getAdults(obj) {
//     let usersArray = Object.entries(obj);
//     let filteredUsers = usersArray.filter(function (user) {
//         if (user[1] >= 18) {
//             return user;
//         }
//     })
//     let userNames = filteredUsers.map(function (user) {
//         return user[0];
//     })
//     return userNames;

// }




// function getAdults(obj) {
//     let userNames = Object.entries(obj)
//         .filter(person => person[1] >= 18)
//         .map(name => name[0]);
//     return userNames;
// }

const getAdults = obj => {
    const arr = Object.entries(obj);
    return arr
        .filter(item => item[1] >= 18)
        .map(elem => elem[0]);
}
console.log(getAdults({}));