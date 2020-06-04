const tasks = [
  {
    text: "Buy milk",
    done: false,
    createDate: "2019-10-24T15:51:32.222Z",
    finishDate: null,
    id: "1",
  },
  {
    text: "Pick up Tom from airport",
    done: false,
    createDate: "2019-10-25T15:51:32.222Z",
    finishDate: null,
    id: "2",
  },
  {
    text: "Visit party",
    done: false,
    createDate: "2019-10-26T15:51:32.222Z",
    finishDate: null,
    id: "3",
  },
  {
    text: "Visit doctor",
    done: true,
    createDate: "2019-10-27T15:51:32.222Z",
    finishDate: "2019-11-27T15:51:32.222Z",
    id: "4",
  },
  {
    text: "Buy meat",
    done: true,
    createDate: "2019-10-28T15:51:32.222Z",
    finishDate: "2019-11-28T15:51:32.222Z",
    id: "5",
  },
];
const listElem = document.querySelector(".list");

const sortTasks = (a, b) => {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }
  if (a.done) {
    return new Date(b.finishDate) - new Date(a.finishDate);
  }
  return new Date(b.createDate) - new Date(a.createDate);
}


const mapTask = ({ text, done, id }) => {
  // debugger;
  const listItemElem = document.createElement("li");
  listItemElem.classList.add("list__item");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("data-id", id);
  checkbox.checked = done;
  checkbox.classList.add("list__item-checkbox");
  if (done) {
    listItemElem.classList.add("list__item_done");
  }
  listItemElem.append(checkbox, text);
  return listItemElem;
}

const renderTasks = (tasksList) => {
  listElem.innerHTML = "";
  const tasksElems = tasksList
    .slice()
    .sort(sortTasks)
    .map(mapTask);
  listElem.append(...tasksElems);


  const checkBoxes = document.querySelectorAll(".list__item");
  checkBoxes.forEach((el) => {
    el.addEventListener("click", (e) => {
      updateTask(e, tasks);
      console.log("click");
    });
  });
};


renderTasks(tasks);

listElem.addEventListener('click', updateTask);


function updateTask(e, tasks) {

  if (!e.target.classList.contains("list__item-checkbox")) {
    return;
  }
  const taskData = tasks.find((task) => task.id === e.target.dataset.id);

  Object.assign(taskData, {
    done: e.target.checked,
    finishDate: new Date().toISOString(),
  });
  renderTasks(tasks);
}


const btnCreate = document
  .querySelector(".create-task-btn")
  .addEventListener("click", createTask);


function createTask() {
  debugger;
  const input = document.querySelector(".task-input");
  if (input.value.length === 0) {
    return;
  }
  const count = tasks.length + 1;

  debugger;
  tasks.push({
    text: input.value,
    done: false,
    createDate: new Date().toISOString(),
    id: count.toString(),
    finishDate: new Date().toISOString(),
  });
  console.log(tasks);
  // tasks.sort((a, b) =>
  //   a.createDate > b.createDate ? -1 : a.createDate > b.createDate ? 1 : 0
  // );
  // tasks.sort((a, b) =>
  //   b.finishDate < a.finishDate ? -1 : b.finishDate > a.finishDate ? 1 : 0
  // );
  renderTasks(tasks);
  document.querySelector(".task-input").value = "";
}
