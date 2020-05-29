//todo list algo
//1. create array of tasks - and create 5 test tasks +++
//2. write render fucn that render all tasks - function renderTasks (tasks) +++
//3. addEventListener for all checkbox  
//4. checkbox handler - update task in the array and render tasks
//5. create handler - create task object and put to the array and render tasks

const todoListElem = document.querySelector('.list');
const listElem = document.querySelector('.list');


let tasks = [
  { text: 'Buy milk', done: false, id: "1" },
  { text: 'Pick up Tom from airport', done: false, id: "2" },
  { text: 'Visit party', done: false, id: "3" },
  { text: 'Visit doctor', done: true, id: "4" },
  { text: 'Buy meat', done: true, id: "5" },
];

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .slice()
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);
      return listItemElem;
    });
  listElem.append(...tasksElems);
};

renderTasks(tasks);

listElem.addEventListener('click', onToggleTask);

function onToggleTask(event) {
  console.log(event.target);
  let isCheckbox = event.target.classList.contains('list__item-checkbox');
  console.log(isCheckbox);

  if (!isCheckbox) {
    return;
  }

  let checkboxId = event.target.dataset.id;
  console.log(checkboxId);
  let task = tasks.find((task) => {
    return task.id === checkboxId;
  });

  task.done = event.target.chaked;

  renderTasks(tasks);
}