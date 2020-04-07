let inputIn = document.querySelector('.text-input');
function getInput(event) {
    console.log(event.target.value);
}
inputIn.addEventListener('change', getInput);