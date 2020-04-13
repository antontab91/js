const btnCreate = document.querySelector('.create-task-btn');
const taskInput = document.querySelector('.task-input');
btnCreate.addEventListener('click', createTask);

function createTask() {
    if (taskInput.value === '') {
        return;
    }

    const list = document.querySelector('.list');
    const listItem = document.createElement('span');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('list__item-checkbox')
    listItem.append(checkbox, taskInput.value);
    listItem.classList.add('list__item')
    list.append(listItem);
    taskInput.value = '';


    const arr = [...document.querySelectorAll('.list__item')];
    console.log(arr);
}

