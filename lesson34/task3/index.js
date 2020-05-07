const allUsers = 'https://5eb321a1974fee0016ecd32b.mockapi.io/users';
const headersJson = { 'Content-Type': 'application/json; charset=utf-8' };

const loginFormElem = document.querySelector('.login-form');
const formInputElem = document.querySelector('.form-input');
const submitBtnElem = document.querySelector('.submit-button');
const errorTextElem = document.querySelector('.submit-button');

//подписываемся на собітие импут  в форме 
// подписываемся на событие сабмит  в форме 
// считываем данніе из формы
// если хотя бі одно поле не валидно используем метод HTMLFormElement.reportValidity()
// отправляем данніе на сервер 
// ответ сервера віводим в алерт в виде обьекта  
// после успешного сохранения донных - отчищаем поля 
// если ошибка при создании пользователя в базе - выводим ошибку в errorTextElem


const vlidationVheck = () => {
    loginFormElem.reportValidity() ?
        submitBtnElem.disabled = false
        : submitBtnElem.disabled = true;
};

const sendFormData = () => {
    event.preventDefault(); // говорю євенту что хочу чтобі он изменил дефолтное поведение 
    const userData = Object.fromEntries([...new FormData(loginFormElem)]);
    getAnswer(userData)
        .then((response) => {
            return response.json();
        }).then((user) => {
            alert(JSON.stringify(user));
            loginFormElem.reset();
            submitBtnElem.disabled = true;
        }).catch(() => {
            errorTextElem.textContent = 'Failed to create user';
            loginForm.reset();
            submitBtn.disabled = true;
        });

}

const getAnswer = (userData) => {
    return fetch(allUsers, {
        method: 'POST',
        headers: headersJson,
        body: JSON.stringify(userData),
    })
}






loginFormElem.addEventListener('submit', sendFormData);
loginFormElem.addEventListener('input', vlidationVheck);



