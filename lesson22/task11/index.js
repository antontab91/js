// const btnCreate = document.querySelector('.create-task-btn');
// let taskInput = document.querySelector('.task-input');
// const listElem = document.querySelector('.list');


// let tasks = [
//     { text: 'Buy milk', done: false },
//     { text: 'Pick up Tom from airport' },
//     { text: 'Visit party', done: false },
//     { text: 'Visit doctor', done: true },
//     { text: 'Buy meat', done: true, },
// ];

// function renderListItems(arr) {

//     listElem.innerHTML = '';
//     return arr.sort(function (a, b) {
//         return a.done - b.done;
//     }).map(function (elem) {
//         let listItem = document.createElement('li');
//         listItem.classList.add('list__item');
//         const checkbox = document.createElement('input');
//         checkbox.setAttribute('type', 'checkbox');
//         checkbox.classList.add('list__item-checkbox');
//         if (elem.done) {
//             checkbox.checked = true;
//             listItem.classList.add('list__item_done');
//         }
//         listItem.append(checkbox, elem.text);
//         listElem.append(listItem);
//     });
// }

// renderListItems(tasks);

// function createElem() {
//     if (taskInput.value === '') {
//         return;
//     }
//     tasks.push({ text: taskInput.value, done: false });
//     console.log(tasks);
//     renderListItems(tasks);
//     // console.log(tasks);
//     taskInput.value = '';
// }

// btnCreate.addEventListener('click', createElem);


// function confirmChecked(event) {
//     return tasks.find(function (elem) {
//         if (elem.text === event.target.parentNode.textContent) {
//             elem.done = event.target.checked;
//             console.log(tasks);
//             renderListItems(tasks);
//         }
//     });
// }


// listElem.addEventListener('click', confirmChecked);




let tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true, },
];

const listElem = document.querySelector('.list');
const createBtnElem = document.querySelector('.create-task-btn');
const taskInputElem = document.querySelector('.task-input');

renderListItems = (arr) => {
    listElem.innerHTML = '';                    // после вызова удаляет прошлый отрендеренный и рендерит новый список
    const sortTasks = arr.sort((a, b) => {
        if (a.done - b.done !== 0) {
            return a.done - b.done;
        }
    }).map((el) => {
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');
        const checkboxElem = document.createElement('input');
        checkboxElem.setAttribute('type', 'checkbox');
        checkboxElem.checked = false;
        if (el.done) {
            checkboxElem.checked = true;
            listItemElem.classList.add('list__item_done')
        }
        listItemElem.append(checkboxElem, el.text);
        listElem.append(listItemElem);
    });
};

const createElem = () => {
    if (taskInputElem.value === '') {
        return;
    }
    tasks.push({ text: taskInputElem.value, done: false });
    renderListItems(tasks);
    taskInputElem.value = '';
}

createBtnElem.addEventListener('click', createElem);

listElem.addEventListener('click', function (event) {
    const target = event.target.closest('li');
    const allTasks = [...document.querySelectorAll('.list__item')];
    tasks[allTasks.indexOf(target)].done = true;                          //присваиваю задаче , которая соответствует индексу ивент таргет дан тру 
    renderListItems(tasks);
})


renderListItems(tasks);

