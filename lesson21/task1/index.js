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

function pushTasks(arr) {
    return arr.map(function (elem) {
        let listItem = document.createElement('li');
        listItem.classList.add('list__item')
        if (elem.done) {
            listItem.className = 'list__item list__item_done';
        }
        listItem.innerHTML = elem.text;
        list.append(listItem);
        console.log('2');
    })
}


sortTasks(tasks);
pushTasks(sortArr);

console.log(sortArr);