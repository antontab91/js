const baseUrl = 'https://5eb321a1974fee0016ecd32b.mockapi.io/users';

const headersJson = { 'Content-Type': 'application/json;charset=utf-8' };

const user = {
    id: '500',
    email: 'antontab91@gmail.com',
    firstName: 'Iron',
    lastName: 'Man',
    age: 42,
};

const getUsersList = () => {
    return fetch(baseUrl)
        .then((response) => {
            return response.json();
        });
};


const getUserById = (userId) => {
    return fetch(`${baseUrl}/${userId}`)
        .then((response) => {
            return response.json();
        });
};



const createUser = (user) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: headersJson,
        body: JSON.stringify(user),
    });
};

const updateUser = (userId) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: headersJson,
        body: JSON.stringify(
            {
                firstName: "bulbazavr",
                lastName: "pikachu",
                age: 209,
            }
        ),
    })
}


const deleteUser = (userId) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
    });
};

// console.log(createUser(user));
// console.log(getUserById(68));
// console.log(updateUser(65));
// console.log(deleteUser(44));
// console.log(getUsersList());
// console.log(getUserById(65));

export { getUsersList, getUserById, createUser, updateUser, deleteUser };