const page = document.querySelector('.pagination');
const pageItem = document.querySelectorAll('.pagination__page');


function handleClick(event) {

    console.log(event.target.dataset.pageNumber);
}

pageItem.forEach(elem => {
    elem.addEventListener('click', handleClick);
});