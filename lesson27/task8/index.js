export function createButton(buttonText) {
    let button = document.createElement('button');
    button.innerHTML = buttonText;
    document.querySelector('body').append(button);
}
// createButton('assa');


