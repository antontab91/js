import { getItem } from "./storage";

const listElem = document.querySelector('.list')

const compareTasks = (a, b) => {
    if (a.done - b.done !== 0) return a.done - b.done;
    if (a.done) return new Date(b.finishDate) - new Date(a.finishDate);
    return new Date(b.createDate) - new Date(a.createDate);
};


export const createCheckbox = ({ done, id }) => {
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.setAttribute('data-id', id);
    checkboxElem.checked = done;
    checkboxElem.classList.add('list__item-checkbox');
    return checkboxElem;
}

export const createListItem = ({ text, done, id }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    const checkboxElem = createCheckbox({ done, id });
    if (done) {
        listItemElem.classList.add('list__item_done');
    }
    listItemElem.append(checkboxElem, text);
    return listItemElem;
}

export const renderTasks = () => {
    const taskList = getItem('taskList') || [];

    listElem.innerHTML = '';
    const taskElems = taskList
        .sort(compareTasks)
        .map(createListItem);
}

