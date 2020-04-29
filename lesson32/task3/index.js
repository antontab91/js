/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

/* ...code here */

const makePromise = (num) => {
    // return Promise.resolve(num);
    return new Promise(resolve => resolve(num));
}


/*
 * пример использования
 */
makePromise(17)
    .then(number => {
        console.log(number); // 17
    });