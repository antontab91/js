
const getRandomDelay = (from, to) => {
    // console.log(from + Math.random() * (to - from));
    from + Math.random() * (to - from);
};

const request = (url) => {
    return new Promise((resolve) => {
        const randomDelay = getRandomDelay(1000, 3000);
        setTimeout(() => {
            resolve({
                userData: {
                    name: 'Tom',
                    age: 17,
                },
                source: url
            })
        }, randomDelay);
    });
};

const servers = [
    'https://server.com/au',
    'https://server.com/us',
    'https://server.com/eu',
];


export const getUserASAP = (userId) => {
    const userUrls = servers
        .map((serverUrl) => {

            // console.log(`${serverUrl}/users/${userId}`)
            return `${serverUrl}/users/${userId}`;
        });

    const requests = userUrls
        .map((userUrl) => {
            // console.log(request(userUrl))
            return request(userUrl)
        });
    // console.log(requests)
    return Promise.race(requests);
};


getUserASAP('user-id-1').then((result) => {
    console.log(result)
})