function filterNames(arr, text) {
    return arr.filter(function (value) {
        return value.indexOf(text) != -1;
    })
}

console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'))

// console.log('Vanya'.indexOf('ya'));