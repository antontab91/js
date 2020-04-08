const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const list = document.querySelector('.list');
let sortArr = [];

function sortTasks(arr) {
    sortArr = arr.sort(function (a, b) {
        return a.done - b.done;
    });
    return sortArr;
}

function getListItems(arr) {
    return arr.map(function (elem) {
        let listItem = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('list__item-checkbox')
        listItem.classList.add('list__item')
        if (elem.done) {
            listItem.className = 'list__item list__item_done';
            checkbox.checked = true;
        }
        listItem.append(checkbox, elem.text);
        list.append(listItem);
        console.log('2');
    });
}


sortTasks(tasks);
getListItems(sortArr);




// const tasks = [
//     { text: 'Buy milk', done: false },
//     { text: 'Pick up Tom from airport', done: false },
//     { text: 'Visit party', done: false },
//     { text: 'Visit doctor', done: true },
//     { text: 'Buy meat', done: true },
// ];
// const getListItems = listItems => {
//     const listElem = document.querySelector('.list');
//     const listItemElems = listItems.sort((a, b) => a.done - b.done)
//         .map(({ text, done }) => {
//             const listItemElem = document.createElement('li');
//             listItemElem.classList.add('list__item');
//             if (done) {
//                 listItemElem.classList.add('list__item_done');
//             }
//             const checkboxElem = document.createElement('input');
//             checkboxElem.setAttribute('type', 'checkbox');
//             checkboxElem.checked = done;
//             checkboxElem.classList.add('list__item-checkbox');
//             listItemElem.append(checkboxElem, text);
//             return listItemElem;

//         });
//     listElem.append(...listItemElems);
// };
// getListItems(tasks);
