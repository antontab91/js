const tasks = [
    { text: 'Buy milk', done: false, dateStart: new Date('Feb 23, 2020'), dateEnd: undefined },
    { text: 'Pick up Tom from airport', done: false, dateStart: new Date(), dateEnd: undefined },
    { text: 'Visit party', done: false, dateStart: new Date(), dateEnd: undefined },
    { text: 'Visit doctor', done: true, dateStart: new Date(), dateEnd: new Date() },
    { text: 'Buy meat', done: true, dateStart: new Date(), dateEnd: new Date() },
];

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');
    listElem.innerHTML = '';

    const listItemsElems = listItems
        .sort((a, b) => {
            if (a.done - b.done !== 0) {
                return a.done - b.done;
            };
            if (a.done) {
                return new Date(b.dateEnd) - new Date(a.dateEnd);
            }
            return new Date(b.dateStart) - new Date(a.dateStart);
        })
        .map(({ text, done, date }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');

            listItemElem.append(checkboxElem, text);

            return listItemElem;
        });
    listElem.append(...listItemsElems);
};

renderListItems(tasks);

const attachBtn = document.querySelector('.create-task-btn');
const createEvent = () => {
    const input = document.querySelector('.task-input');
    if (!input.value) return false;
    tasks.unshift({ text: input.value, done: false, dateStart: new Date(), dateEnd: undefined });
    input.value = '';

    renderListItems(tasks);
};
attachBtn.addEventListener('click', createEvent);

const confirmEvent = document.querySelector('.list');
const confirmItem = event => {
    const confirmItem = tasks.find(item =>
        item.text === event.target.parentNode.textContent);
    confirmItem.done = event.target.checked
    confirmItem.dateEnd = confirmItem.done ? new Date() : undefined;
    renderListItems(tasks);
};
confirmEvent.addEventListener('click', confirmItem);