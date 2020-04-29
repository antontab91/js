const getValueWithDelay = (value, delay) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            console.log(value);
            resolve(value);
        }, delay);
    });
};

const asyncNumber1 = getValueWithDelay(10, 2000);
const asyncNumber2 = getValueWithDelay(4, 1000);
const asyncNumber3 = getValueWithDelay(7, 5000);

const getSumValues = (values) => {
    return values.reduce((acc, value) => {

        // console.log(acc + value.value)
        return acc + value.value;
    }, 0);
}

export const asyncSum = (...asyncNumbers) => {
    console.log(asyncNumbers);
    return Promise.allSettled(asyncNumbers)
        .then((values) => {
            console.log(values)
            console.log(getSumValues(values));
            getSumValues(values);
        });
};
// asyncSum(asyncNumber1, asyncNumber2, asyncNumber3);