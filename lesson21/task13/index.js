// export const getSection = num => {
//     let arr = Array.from(document.querySelectorAll('span'))
//         .reduce((acc, elem) => {
//             if (elem.dataset.number == num) {
//                 acc = elem.closest('div').dataset.section;
//             }
//             return acc;
//         }, '')
//     return arr;
// }

export function getSection(num) {
    let arr = [...document.querySelectorAll('span')];

    let newArr = arr.reduce(function (acc, elem) {
        if (elem.dataset.number == num) {
            acc = elem.closest('div').dataset.section;
        }
        return acc;
    });
    return newArr

}
// console.log(getSection(3))
