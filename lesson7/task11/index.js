function filterNames(arr, text) {  // функция принимает массив строк и ключь по которому нужно найти определенные строки 
    return arr.filter(function (name) { // к масиву применю метод фильтр , колбек функция принимает имя 
        if (name.length > 5) {          // если имя юольше чем из 5 символов 
            return name.indexOf(text) != -1;    // возвращаю имя в котором есть совпадение с ключем , тоесть не равно -1        (-1 - это когда нет совпадения)
        }
    })
}

console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'))

// console.log('Vanya'.indexOf('ya'));