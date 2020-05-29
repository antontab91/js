//todo list algo
//1. create array of tasks - and create 5 test tasks 
//2. write render fucn that render all tasks - function renderTasks (tasks)
//3. addEventListener for all checkbox  
//4. checkbox handler - update task in the array and render tasks
//5. create handler - create task object and put to the array and render tasks

const tasks = [
  { text: 'Buy milk', done: false, id: "1" },
  { text: 'Pick up Tom from airport', done: false, id: "2" },
  { text: 'Visit party', done: false, id: "3" },
  { text: 'Visit doctor', done: true, id: "4" },
  { text: 'Buy meat', done: true, id: "5" },
];
const listElem = document.querySelector('.list');
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


// const todoListElem =document.querySelector('.list')
// todoListElem.addEventListener('click', onToggleTask)


//algo
//check if checkbox is clicked, if not - exit
//get checkbox data-id
//find task by id
//update tasks
//render tasks
const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }
  const taskData = tasks.find(task => task.id === e.target.dataset.id);
  Object.assign(taskData, { done: e.target.checked });
  renderTasks(tasks);
};
const todoListElem = document.querySelector('.list');
todoListElem.addEventListener('click', onToggleTask);
const createBtnElem = document.querySelector('.create-task-btn');
//algo
//find btn and input by class name
//make a check for input
//update input
//add new task to the list
//render tasks
const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';
  tasks.push({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString()
  });
  renderTasks(tasks);
};
createBtnElem.addEventListener('click', onCreateTask);