const tasks = [
    { text: 'Buy milk', done: false, date: new Date(), id: getRandomId() },
    { text: 'Pick up Tom from airport', done: false, date: new Date(), id: getRandomId() },
    { text: 'Visit party', done: false, date: new Date(), id: getRandomId() },
    { text: 'Visit doctor', done: true, date: new Date(), id: getRandomId() },
    { text: 'Buy meat', done: true, date: new Date(), id: getRandomId() },
];


function getRandomId() {
    return Math.floor(Math.random() * 10000);
}



const renderListItems = listItems => {
    const list = document.querySelector('.list');
    list.innerHTML = '';

    const listElements = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id = getRandomId() }) => {
            const listElement = document.createElement('li');
            listElement.classList.add('list__item');
            if (done) {
                listElement.classList.add('list__item_done');
            }
            const checkboxElement = document.createElement('input');
            checkboxElement.setAttribute('type', 'checkbox');
            checkboxElement.setAttribute('data-id', id);
            checkboxElement.checked = done;
            checkboxElement.classList.add('list__item-checkbox');
            listElement.append(checkboxElement, text);

            return listElement;
        });

    list.append(...listElements);
}
renderListItems(tasks);



const listWithTasks = document.querySelector('.list');
const updateTasksList = event => {
    const isCheckbox = event.target.classList.contains('list__item-checkbox');
    if (!isCheckbox) {
        return;
    }
    // console.log(tasks.map(item => item.id));
    const taskData = tasks.find(task => task.id == event.target.dataset.id);
    Object.assign(taskData, { done: event.target.checked });
    renderListItems(tasks);
}
const updateTasksListHandler = listWithTasks.addEventListener('click', updateTasksList);



const creteBtn = document.querySelector('.create-btn');
const addNewTask = () => {
    const input = document.querySelector('.task-input');

    if (!input.value) return;
    tasks.unshift({ text: `${input.value}`, done: false, date: new Date(), id: getRandomId() });
    input.value = '';

    renderListItems(tasks);
}
const addNewTaskHandler = creteBtn.addEventListener('click', addNewTask);