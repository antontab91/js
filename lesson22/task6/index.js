function clicker() {
    console.log('clicked');
    document.querySelector('.single-use-btn').removeEventListener('click', clicker);
}


document.querySelector('.single-use-btn').addEventListener('click', clicker);

