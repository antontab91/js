/*
 * failedPromise должен зареджектить ошибку new Error('Oops, error!');
 * Ответьте себе на вопрос, какой тип данных имеет переменная userDataPromise
 */

const failedPromise = new Promise((resolve, reject) => {
    /* ...code here */
    const error = new Error('Oops, error!');
    reject(error);

});

/*
 * выведите в консоль ошибку в ф-ции onError
 */

failedPromise.catch(function onError(error) {
    /* ...code here */
    console.log(error);

});