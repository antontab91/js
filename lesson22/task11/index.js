const tasks = [];





function createTask(arr) {

    let list = document.querySelector('.list');
    let newArr = arr.sort(function (a, b) {
        return a.done - b.done;
    }).map(function (elem) {
        let listItem = document.createElement('li');
        let checkbox = document.createElement('input');
        listItem.classList.add('list__item');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('list__item-checkbox');

        if (elem.done) {
            listItem.classList.add('list__item_done');
            checkbox.checked = true;
        }

        listItem.append(checkbox, elem.text);

        return listItem;
    });

    list.append(...newArr);


}
const btnCreate = document.querySelector('.create-task-btn');
function MyClick() {
    let taskInput = document.querySelector('.task-input');
    if (taskInput.value === '') {
        return;
    }
    console.log(taskInput.value);
    tasks.push({ text: taskInput.value, done: false });
    console.log(tasks);
    createTask(tasks);
    taskInput.value = '';
}

btnCreate.addEventListener('click', MyClick);
