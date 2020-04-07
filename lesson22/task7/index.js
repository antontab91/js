function handleClick(event) {
    console.log(event.target.textContent);
}
let btns = [...document.querySelectorAll('.btn')];

btns.forEach(function (elem) {
    console.log('sasa')
    elem.addEventListener('click', handleClick);
});

// document.querySelectorAll('.btn').addEventListener('click', handleClick);


// document.querySelector('.btn')