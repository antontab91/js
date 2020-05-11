// async function func() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(17);
//         }, 1000);
//     });
//     const result = await promise;
//     console.log(result);
//     return 1;
// }

// const result = func();
// result.then((data) => {
//     console.log(data);
// });
// console.log('hi');


const getUser = async userId => {
    try {
        const response = await fetch((`https://api.github.com/users/${userId}`));
        // console.log(response);
        if (!response.ok) {
            return null;
        }
        const userData = await response.json();
        return userData;
    }
    catch (e) {
        throw new Error('Failed to fetch user');
    }
};

getUser('fasebook')
    .then((userData) => {
        console.log(userData);
    })
    .catch((err) => {
        alert(err.message);
    });
// console.log(getUser('fasebook'));