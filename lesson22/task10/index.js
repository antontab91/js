let arr = [...document.querySelectorAll('.pagination__page')];
console.log(arr);

function handleClick(event) {
    console.log(event.target.dataset.pageNumber);
}

arr.forEach(function (elem) {
    elem.addEventListener('click', handleClick);
});
