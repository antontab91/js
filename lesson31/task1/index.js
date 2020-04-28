export const requestUserData = userId => {
    const request = new Promise((resolve, reject) => {

        if (userId === 'broken') {
            setTimeout(() => {
                reject(
                    new Error('User is not found')
                );
            }, 500);
        } else {
            setTimeout(() => {
                resolve({
                    name: 'John',
                    email: `${userId}`,
                    userId
                })
            }, 1000);
        }
    });

    return request;
};



requestUserData('user-1')
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });

