export const asyncCalculator = num => {
    const pr = new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Initial value: ${num}`);
            resolve(num)
        }, 500);
    });

    return pr.then((value) => {
        const pr = new Promise((resolve) => {
            setTimeout(() => {
                const result = value * value;
                console.log(`Squared value: ${result}`);
                resolve(result);
            }, 500);
        });

        return pr.then((value) => {
            const result = value * 2;
            console.log(`Doubled value: ${result}`);
        });
    });
};

asyncCalculator(4)