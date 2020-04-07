export function getSection(num) {
    let arr = [...document.querySelectorAll('span[data-number]')];
    arr.reduce(function (acc, elem) {
        if (elem.dataset.number == num) {
            acc = elem.closest('div').dataset.section;
        }
        return acc;
    }, '');
    return arr;
}

getSection()