// 1 Если инпут не удовлетворяет атрибуты валидации, он должен обводиться красной границей;

// 2 При изменении значений в полях ввода, нужно показать сообщение про ошибку ввода.
// Ошибку вывести под соответствующим полем ввода и отобразить красным цветом

// 3 Поле  email должно быть не пустое(ошибка 'Required') и содержать символ  '@'(ошибка 'Should be an email');

// 4 Поле password должно быть не пустое(ошибка 'Required')

// 5 Вывести значение полей формы в  alert в виде объекта после подтверждения формы

// 6 В редакторе ниже чуть более детально расписано, как можно получить данные с формы в виде объекта

// // так можно получить данные формы
// const formFields = [...new FormData(formElem)];
// // formFields => [["email", "значение поля email"], ["password", "значение поля password"]]
// const formData = formFields.reduce(function (acc, formField) {
//     const prop = formField[0]; // здесь "name" инпута
//     const value = formField[1]; // здесь "value" инпута
//     // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
//     // const [prop, value] = formField;
//     return {
//         // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
//         ...acc,
//         // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//         [prop]: value,
//     };
// }, {});


const emailInputElement = document.querySelector('#email');
const passwordInputElement = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

// console.log(emailErrorElem, emailInputElement, passwordErrorElem, passwordInputElement);

function isRequired(value) {           // когда мы получили значение поля , нам нужно его проанализировать 
    if (value) {                       // если поле не пустое 
        return undefined;
    }                                   // в противном случае ошибка (если значения нету )
    return 'Required';
}

function isEmail(value) {               // провера является ли значение емейлом (есть ли в нем '@' )
    if (value.includes('@')) {           // если содержит собаку    
        return undefined;
    }
    return 'Should be an email';            // в противном случае возвращаем текст ошибки  
}


const validatorByFiled = {
    email: [isRequired, isEmail],
    password: [isRequired]
};

const validate = (fieldName, value) => {
    const validators = validatorByFiled[fieldName];
    return validators
        .map(validator => validator(value))
        .filter(errorText => errorText)
        .join(', ');
};

function onEmailChange(event) {
    const errorText = validate('email', event.target.value);       // вместе с функцией валидейт - єто упрощенная версия того что ниже
    emailErrorElem.textContent = errorText;
}
function onPasswordChange(event) {
    const errorText = validate('password', event.target.value);

    passwordErrorElem.textContent = errorText;
}



// function onEmailChange(event) {         // когда будет меняться поле емейл , я хочу сгенерировать ошибку на основании єтих 2 валидаторов

//     const errorText = [isRequired, isEmail]        //по двум функиям прохожусь мапом и вызываю каждую функцию со значением event.target.value
//         .map(validator => validator(event.target.value))
//         .filter(errorText => errorText)                        // отфильтровую , если не андефаинд - выведется текст ошибки 
//         .join(', ');                                            // соеденяю текст ошибок с помощью метода джоин и запятой с пробелом 

//     emailErrorElem.textContent = errorText;                     // вставляю сгенерированную ошибку 
//     // console.log(event.target.value);
// }

// function onPasswordChange(event) {
//     const errorText = [isRequired]
//         .map(validator => validator(event.target.value))
//         .filter(errorText => errorText)
//         .join(', ');

//     passwordErrorElem.textContent = errorText;
// }


emailInputElement.addEventListener('input', onEmailChange);   // на каждое изминение в импуте , я запускаю функцию , которая принимает значение обьекта ивента(event.target.value)
passwordInputElement.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();          // отменяем дефолтное поведение в браузере , в данном случае дефолтній сабмит браузера 

    // console.log([...new FormData(formElem)]);
    const formData = [...new FormData(formElem)]      //  данные из формы преобразовываем в массив 
        .reduce(function (acc, [field, value]) {        // проходимся по массиву и складываем в акамулятор данные из инпутов 
            return { ...acc, [field]: value };              // если не понятна такая запись в самом верху есть закоменченное обяснение 
        }, {});

    console.log(formData);
    alert(JSON.stringify(formData));               // преобразовываем данные в строку с помощь джейсон стрингифай и выводим алертом строку 


}

formElem.addEventListener('submit', onFormSubmit);     // обработчик сабмита








