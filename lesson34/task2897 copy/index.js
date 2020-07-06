// const loginForm = document.querySelector('.login-form');
// const submitBtn = document.querySelector('.submit-button');
// const errorText = document.querySelector('.error-text');
// const allUsers = 'https://5e98af0c5eabe7001681c458.mockapi.io/v1/users';
// const headersJson = { 'Content-Type': 'application/json; charset=utf-8' };

// const checkValidation = () => {
//     if (loginForm.reportValidity()) {
//         submitBtn.disabled = false;
//     }
// }
// const onFormSubmit = event => {
//     event.preventDefault();
//     const formData = [...new FormData(loginForm)]
//         .reduce((acc, arr) => ({ ...acc, [arr[0]]: arr[1] }), {});
//     addNewUser(formData)
//         .then(response => response.json())
//         .then(user => {
//             alert(JSON.stringify(user));
//             loginForm.reset();
//             submitBtn.disabled = true;
//         })
//         .catch(() => {
//             errorText.textContent = 'Failed to create user';
//             loginForm.reset();
//             submitBtn.disabled = true;
//         });
// };
// loginForm.addEventListener('submit', onFormSubmit);
// loginForm.addEventListener('input', checkValidation);

// const addNewUser = user => {
//     return fetch(allUsers, {
//         method: 'POST',
//         headers: headersJson,
//         body: JSON.stringify(user),
//     });
// };

const emailInput = document.querySelector('[name="email"]');
const passwordInput = document.querySelector('[name="password"]');
const nameInput = document.querySelector('[name="name"]');
const formElem = document.querySelector('.login-form');
const submitBtnElem = document.querySelector('.submit-button');
const errorElem = document.querySelector('.error-text');

function onInputChange(event) {
    console.log(event);
}


emailInput.addEventListener("input", onInputChange);
passwordInput.addEventListener("input", onInputChange);
nameInput.addEventListener("input", onInputChange);


function onFormSubmit(event) {
    console.log(event);
    event.preventDefault();

    let user = Object.fromEntries(new FormData(formElem));

    console.log(user);

    fetch(serverUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(user),
    });
    .then((responce) => {
        return responce.json()
    })
        .then((data) => {

        })
}

formElem.addEventListener("submit", onFormSubmit);