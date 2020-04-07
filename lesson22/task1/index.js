const task = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

function renderListItems(listItems) {
    const listElem = document.querySelector('.list');

    const listTasks = listItems.sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li');
            const checkboxElem = document.createElement('input')
            checkboxElem.classList.add('list__checkbox');
            checkboxElem.setAttribute('type', 'checkbox');
            listItemElem.classList.add('list__item');
            if (done) listItemElem.classList.add('list__item_checked');
            checkboxElem.checked = done;
            listItemElem.append(checkboxElem, text);

            return listItemElem;
        });


    listElem.append(...listTasks);


    return listTasks;


};


renderListItems(task);