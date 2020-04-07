export function getTitleElement() {
    let title = document.querySelector('.title');
    console.dir(title);
    return title;
}

export function getInputElement() {
    let input = document.querySelector('input[type="text"]');
    console.dir(input);
    return input;
}

getTitleElement();
getInputElement()