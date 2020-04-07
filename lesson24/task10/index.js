// name = "login"


export function finishForm() {
    let oldInput = document.querySelector('input');
    oldInput.setAttribute('type', 'password');



    let inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('name', 'login');

    let form = document.querySelector('.login-form');
    form.prepend(inputName);
}
// finishForm();

