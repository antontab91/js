let checkbox = document.querySelector('.task-status');

checkbox.addEventListener('change', function (event) {
    console.log(event.target.checked);
});