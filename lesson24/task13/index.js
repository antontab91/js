export function getSection(num) {
    let arr = [...document.querySelectorAll('span[data-number]')];
    let newArr = arr.reduce(function (acc, elem) {
        if (elem.dataset.number == num) {
            acc = elem.closest('div').dataset.section;
        }
        return acc;
    }, '');
    console.log(arr)
    return newArr;

}

// getSection()

