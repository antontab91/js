const baseUrl = 'https://5eb1d7e736d3ee001682e2b2.mockapi.io/api/v1/users';

const headersJson = { 'Content-Type': 'application/json;charset=utf-8' };

/* getUsersList code here */
const getUsersList = () => {
    return fetch(baseUrl)
        .then(response => response.json());
};
//getUsersList().then(result => console.log(result))

/* getUserById code here */
const getUserById = userById => {
    return fetch(`${baseUrl}/${userById}`)
        .then(response => response.json())
};
//getUserById('3').then(userById => console.log(userById));

/* createUser code here */
const user = {
    email: "antontab91@gmail.com",
    firstName: "Ant",
    lastName: "Tab",
    age: 29,
};
const createUser = newUser => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: headersJson,
        body: JSON.stringify(newUser),
    })
};
//createUser(user);

/* updateUser code here */
const updateUserInfo = {
    firstName: "bulbazavr",
    lastName: "pikachu",
    age: 209,
}
const updateUser = (userId, updateUserInfo) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: headersJson,
        body: JSON.stringify(updateUserInfo),
    })
};
//updateUser('2', updateUserInfo);

/* deleteUser code here */
const deleteUser = userId => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
    })
};
//deleteUser("8");
export { getUsersList, getUserById, createUser, updateUser, deleteUser };