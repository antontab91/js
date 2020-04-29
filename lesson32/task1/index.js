const getValueWithDelay = (value, delay) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            console.log(value);
            resolve(value);
        }, delay);
    });
};

const asyncNumber1 = getValueWithDelay(10, 2000);
const asyncNumber2 = getValueWithDelay('4', 1000);
const asyncNumber3 = getValueWithDelay('', 5000);
const asyncNumber4 = getValueWithDelay(false, 500);
const asyncNumber5 = getValueWithDelay(54, 3000);
const asyncNumber6 = getValueWithDelay(NaN, 1500);

const getSumValues = (values) => {
    return values
        .filter((value) => {
            // console.log(!isNaN(value))
            return !isNaN(value);
        })
        .reduce((acc, num) => {
            return acc + Number(num);
        }, 0);
}

export const asyncSum = (...asyncNumbers) => {
    console.log(asyncNumbers);
    return Promise.all(asyncNumbers)
        .then((values, error) => {
            // console.log(values)
            return getSumValues(values);
            // console.log(getSumValues(values));
        })
        .catch(() => {
            return Promise.reject(new Error('Can\'t calculate'))
        });
};
asyncSum(asyncNumber1, asyncNumber2, asyncNumber3, asyncNumber4, asyncNumber5, asyncNumber6)
    .then((result) => {
        console.log(result);
    });