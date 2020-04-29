
const getRandomDelay = (from, to) => {
    from + Math.random * (to - from);
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
    'https://server.com/us',
    'https://server.com/eu',
    'https://server.com/au',
];


export const getUserASAP = (userId) => {
    const userUrls = servers
        .map((serverUrl) => {
            return `${serverUrl}/users/${userId}`;
        });

    const requests = userUrls
        .map((userUrl) => {
            return request(userUrl)
        });

    return Promise.race(requests);
};


getUserASAP('user-id-1').then((result) => {
    console.log(result)
})