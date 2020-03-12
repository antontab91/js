const obj = {
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18
};


function getAdults(obj) {
    const usersArray = Object.entries(obj);
    const filteredUsers = usersArray.filter(function (user) {
        if (user[1] >= 18) {
            return user;
        }
    })
    const userNames = filteredUsers.map(function (user) {
        return user[0];
    })

    return userNames;
}

// const getAdults = userObj => Object.entries(userObj)
//     .filter(user => user[1] >= 18)
//     .map(user => user[0]);

console.log(getAdults(obj));

