// name = "login"


export function finishForm() {
    let oldInput = document.querySelector('input');
    oldInput.setAttribute("type", "password");



    let form = document.querySelector('.login-form');
    let inputName = document.createElement('input');
    inputName.setAttribute('name', 'login')
    form.prepend(inputName);
}
finishForm();