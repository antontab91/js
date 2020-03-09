import { join } from "path";

const arr = [656, 1, 545, 87, 8787, 52];

// function reverseArray(arr) {
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     let newArr = arr.reverse();
//     return newArr;
// }


function reverseArray(arr) {   // обьявил функцию , которая принимает массмив
    if (!Array.isArray(arr)) {  // проверка массив или нет 
        return null;
    }
    let newArr = [];              // создал массив в который буду записывать элементы наоборот 

    for (let i = arr.length - 1; i >= 0; i--) {   // перебераю в обратную сторону 
        newArr.push(arr[i]);                      // пушу по порядку в новій массив каждую итерацию цикла наоборот 

    }

    return newArr;                                  // возвращаю перевернутый массив
}

reverseArray(arr);
console.log(arr);
console.log(reverseArray(arr));