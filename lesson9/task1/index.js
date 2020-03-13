const obj = {
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18
};


// function getAdults(obj) {
//     const usersArray = Object.entries(obj);
//     const filteredUsers = usersArray.filter(function (user) {
//         if (user[1] >= 18) {
//             return user;
//         }
//     })
//     const userNames = filteredUsers.map(function (user) {
//         return user[0];
//     })

//     return userNames;
// }


function getAdults(obj) {
    return Object.entries(obj).filter(function (element) {
        return element[1] >= 18;
    }).map(function (item) {
        return item[0]
    });
}


console.log(getAdults(obj));



