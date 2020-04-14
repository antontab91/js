const btnCreate = document.querySelector('.create-task-btn');
let taskInput = document.querySelector('.task-input');

const tasks = [
    { text: "as", done: false },
    { text: "dsaasd", done: false },
    { text: "asd", done: true },
    { text: "sad", done: false }
];



function renderListItems(arr) {
    const listElem = document.querySelector('.list');
    listElem.innerHTML = '';
    return arr.sort(function (a, b) {
        return a.done - b.done;
    }).map(function (elem) {
        let listItem = document.createElement('li');
        listItem.classList.add('list__item');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('list__item-checkbox');
        if (elem.done) {
            checkbox.checked = true;
            listItem.classList.add('list__item_done');
        }
        listItem.append(checkbox, elem.text);
        listElem.append(listItem);
    });
}

renderListItems(tasks)

function createElem() {
    if (taskInput.value === '') {
        return;
    }
    tasks.push({ text: taskInput.value, done: false });
    console.log(tasks);
    renderListItems(tasks);
    console.log(tasks);
    taskInput.value = '';
}

btnCreate.addEventListener('click', createElem);




