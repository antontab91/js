const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const list = document.querySelector('.list');
let sortArr = [];
let listItems = [];

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
        checkbox.classList.add('list__item-checkbox');                                //     добавил класс 
        listItem.classList.add('list__item');                                           // добавил класс 
        if (elem.done) {                                                                // если свойство дан обьекта - тру 
            listItem.className = 'list__item list__item_done';                          // значит устанавливаю класс 
            checkbox.checked = true;                                                     // и чекбокс чекнутый            
        }
        listItem.append(checkbox, elem.text);                                            // вставляю чекбокс и текст в листайтем 
        list.append(listItem);                                                            // вставляю листайтем 
        listItems.push(listItem)
    });
}

sortTasks(tasks);
getListItems(sortArr);

console.log(listItems);



function bubu(arr) {
    arr.map(function (elem, index) {
        elem.addEventListener('click', function () {
            console.log(elem, index);
            // console.log(event);
            elem.classList.toggle('list__item_done');
            let closestChekbox = elem.closest(checkbox);
            console.dir(closestChekbox);
            // if (element.closest(selectors))
        });
    });
}