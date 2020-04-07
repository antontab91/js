// textContent
// document.createElement

export function finishList() {
    let list = document.querySelector('.list');
    let special = document.querySelector('.special');
    let el1 = document.createElement('li');
    let el4 = document.createElement('li');
    let el6 = document.createElement('li');
    let el8 = document.createElement('li');
    list.prepend(el1);
    special.before(el4);
    special.after(el6);
    list.append(el8);
    el1.textContent = '1';
    el4.textContent = '4';
    el6.textContent = '6';
    el8.textContent = '8';
}

// finishList();
