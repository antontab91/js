export const delay = (timeInMs) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(() => {
                // console.log('Done');
            });
        }, timeInMs);
    });
};


delay(3000).then(() => {
    console.log('Done');
})

