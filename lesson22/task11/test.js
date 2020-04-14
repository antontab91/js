const renderListItems = listItems => {
    const listElem = document.querySelector('.list');
    listElem.innerHTML = '';

    const listItemsElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
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

function renderListItems(listItems) {
    let list = document.querySelector('.list');

    let listItemsElems = listItems.sort(function (a, b) {
        return a.done - b.done;
    }).map(function (elem) {
        let listItem = document.createElement('li');
        listItem.classList.add('list__item');
        if (elem.done) {
            listItem.classList.add('list__item_done');
        }
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = done;
        checkbox.classList.add('list__item-checkbox');

        listItem.append(checkbox, elem.text);

        return listItem;
    });

    list.append(...listItemsElems);


}