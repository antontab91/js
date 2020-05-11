async function getUsersBlogs([...userIds]) {
    console.log(userIds);
    const requests = userIds.map((userId) => {
        return fetch(`https://api.github.com/users/${userId}`)
            .then((responce) => {
                if (responce.ok) {
                    return responce.json();
                }
                throw new Error('Filed to load data');
            });
    });
    const dataUsers = await Promise.all(requests);
    console.log(dataUsers);
    return dataUsers.map((el) => {
        return el.blog;
    })
}


// https://api.github.com/users/USERID
// console.log(getUsersBlogs(['google', 'facebook', 'gaearon']))
getUsersBlogs(['google', 'facebook', 'gaearon'])
    .then(linksList => console.log(linksList));


            // ["https://opensource.google/", "https://opensource.fb.com", "http://twitter.com/dan_abramov"]
