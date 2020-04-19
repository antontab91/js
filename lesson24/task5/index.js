// let tasks = [
//     { text: 'Buy milk', done: false, dateStart: new Date(2020, 1, 15), dateEnd: undefined, id: 5 },
//     { text: 'Pick up Tom from airport', done: false, dateStart: new Date(2020, 1, 14), dateEnd: undefined, id: 4 },
//     { text: 'Visit party', done: false, dateStart: new Date(2020, 1, 13), dateEnd: undefined, id: 3 },
//     { text: 'Visit doctor', done: true, dateStart: new Date(2020, 1, 12), dateEnd: new Date(2020, 1, 12), id: 2 },
//     { text: 'Buy meat', done: true, dateStart: new Date(2020, 1, 11), dateEnd: new Date(2020, 1, 11), id: 1 },
// ];

// function createNewTask() {
//     if (task.value == '') return;
//     const newTask = {
//         text: task.value,
//         done: false,
//         dateStart: new Date(),
//         dateEnd: undefined,
//         id: tasks.length,
//     }
//     tasks.push(newTask);
//     renderListItems(tasks);
//     task.value = '';
// };
// const task = document.querySelector('.task-input');
// const createTaskButton = document.querySelector('.create-task-btn');
// createTaskButton.addEventListener('click', createNewTask);
// const listElem = document.querySelector('.list');

// function renderListItems(allTask) {
//     listElem.innerHTML = '';
//     const listItemElems = allTask
//         .sort((a, b) => {
//             if (a.done - b.done !== 0) {
//                 return a.done - b.done;
//             }
//             if (a.done) {
//                 return new Date(b.dateEnd) - new Date(a.dateEnd);
//             }
//             return new Date(b.dateStart) - new Date(a.dateStart);
//         })
//         .map(({ text, done, id }) => {
//             const listItemElem = document.createElement('li');
//             listItemElem.classList.add('list__item');
//             const cheboxElem = document.createElement('input');
//             cheboxElem.setAttribute('type', 'checkbox');
//             cheboxElem.checked = done;
//             if (done) { listItemElem.classList.add('list__item_done'); };
//             cheboxElem.classList.add('list__item-checkbox');
//             listItemElem.append(cheboxElem, text);
//             listItemElem.setAttribute('id', id);
//             listElem.addEventListener('click', getChecked);
//             return listItemElem;
//         });
//     listElem.append(...listItemElems);
// };

// function getChecked(event) {
//     const task = tasks.find(elem => elem.id === +event.target.parentElement.id);
//     task.done = event.target.checked;
//     task.dateEnd = task.done ? new Date() : undefined;
//     renderListItems(tasks);
// };

// renderListItems(tasks);




const btnCreate = document.querySelector('.create-task-btn');
let taskInput = document.querySelector('.task-input');
const listElem = document.querySelector('.list');

let tasks = [
    { text: 'Buy milk', done: false, dateStart: new Date(2020, 1, 15), dateEnd: undefined, id: 5 },
    { text: 'Pick up Tom from airport', done: false, dateStart: new Date(2020, 1, 14), dateEnd: undefined, id: 4 },
    { text: 'Visit party', done: false, dateStart: new Date(2020, 1, 13), dateEnd: undefined, id: 3 },
    { text: 'Visit doctor', done: true, dateStart: new Date(2020, 1, 12), dateEnd: new Date(2020, 1, 12), id: 2 },
    { text: 'Buy meat', done: true, dateStart: new Date(2020, 1, 11), dateEnd: new Date(2020, 1, 11), id: 1 },
];

function renderListItems(arr) {

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

renderListItems(tasks);

function createElem() {
    if (taskInput.value === '') {
        return;
    }
    tasks.push({ text: taskInput.value, done: false });
    console.log(tasks);
    renderListItems(tasks);
    // console.log(tasks);
    taskInput.value = '';
}

btnCreate.addEventListener('click', createElem);


function confirmChecked(event) {
    return tasks.find(function (elem) {
        if (elem.text === event.target.parentNode.textContent) {
            elem.done = event.target.checked;
            console.log(tasks);
            renderListItems(tasks);
        }
    });
}


listElem.addEventListener('click', confirmChecked);
