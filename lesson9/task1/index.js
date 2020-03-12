const obj = {
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18
};


function getAdults(obj) {
    let usersArray = Object.entries(obj);
    let filteredUsers = usersArray.filter(function (user) {
        if (user[1] >= 18) {
            return user;
        }
    })
    let userNames = filteredUsers.map(function (user) {
        return user[0];
    })
    return userNames;

}



console.log(getAdults({}));