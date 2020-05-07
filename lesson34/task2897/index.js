const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');
const allUsers = 'https://5eb321a1974fee0016ecd32b.mockapi.io/users';
const headersJson = { 'Content-Type': 'application/json; charset=utf-8' };

const checkValidation = () => {
    if (loginForm.reportValidity()) {
        submitBtn.disabled = false;
    }
}
const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(loginForm)]
        .reduce((acc, arr) => ({ ...acc, [arr[0]]: arr[1] }), {});
    addNewUser(formData)
        .then(response => response.json())
        .then(user => {
            alert(JSON.stringify(user));
            loginForm.reset();
            submitBtn.disabled = true;
        })
        .catch(() => {
            errorText.textContent = 'Failed to create user';
            loginForm.reset();
            submitBtn.disabled = true;
        });
};
loginForm.addEventListener('submit', onFormSubmit);
loginForm.addEventListener('input', checkValidation);

const addNewUser = user => {
    return fetch(allUsers, {
        method: 'POST',
        headers: headersJson,
        body: JSON.stringify(user),
    });
};