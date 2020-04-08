const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const list = document.querySelector('.list');
let sortArr = [];

function sortTasks(arr) {                                      // отсортировал те дела , что не готовы - вверху , те что готовы внизу .
    sortArr = arr.sort(function (a, b) {
        return a.done - b.done;
    });
    return sortArr;
}

function getListItems(arr) {
    return arr.map(function (elem) {                                               // прошелся по полученному массиву 
        let listItem = document.createElement('li');                                // обьявил переменную листайтема             
        let checkbox = document.createElement('input');                             // обьявил переменную чекбокса 
        checkbox.type = 'checkbox';                                                  // тип инпута чекбокс 
        checkbox.classList.add('list__item-checkbox')                                 //     добавил класс 
        listItem.classList.add('list__item')                                            // добавил класс 
        if (elem.done) {                                                                // если свойство дан обьекта - тру 
            listItem.className = 'list__item list__item_done';                          // значит устанавливаю класс 
            checkbox.checked = true;                                                     // и чекбокс чекнутый            
        }
        listItem.append(checkbox, elem.text);                                            // вставляю чекбокс и текст в листайтем 
        list.append(listItem);                                                            // вставляю листайтем 
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
