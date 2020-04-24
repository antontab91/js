
localStorage.clear();
localStorage.setItem('name', JSON.stringify('Tom'));
localStorage.setItem('age', JSON.stringify(17));
localStorage.setItem('Tom', JSON.stringify({ name: 'Tom' }));

// console.log(JSON.parse(localStorage.getItem('age')));
// console.log(JSON.parse(localStorage.getItem('Tom')));

// РАЛЕЗУЕМ МЕТОД ПОЛУЧИТЬ ВС Е ДАННІЕ ИЗ ЛОКАЛ СТОРЕДЖ 

export const getLocalStorageData = () => {
    return Object.entries(localStorage)
        .reduce((acc, [key, value]) => {
            let newValue;
            try {
                newValue = JSON.parse(value);
            } catch (e) {
                newValue = value;
            }
            return {
                ...acc,
                [key]: newValue
            }
        }, {});
};

// console.log(Object.entries(localStorage))

const getLocalStorageData2 = () => {        // пробую черпез ФОР . 
    let myObj = {};
    for (let i = 0; i < localStorage.length; i++) {
        // console.log()

        // console.log(localStorage.key(i));
        myObj[localStorage.key(i)] = JSON.parse(localStorage.getItem(localStorage.key(i)));     // ПРИСВАИВАЮ НА КАЖДОЙ ИТЕРАЦИИ ИМЯ КЛЮЧА НА ДАННОЙ ИТЕРАЦИИ РАВНО ЗНАЧЕНИЮ НА ЄТОЙ ЖЕ ИТЕРАЦИИ 

        // console.log(myObj)
    }
    return myObj;
};



const getLocalStorageData3 = () => {          // тут пробую сделать тоже самое но с помощью фоич 
    let keys = Object.keys(localStorage);
    let values = Object.values(localStorage);
    let myObj = {};

    keys.forEach((elem, index) => {
        // console.log(elem);
        // console.log(index);
        myObj[elem] = JSON.parse(values[index]);
    });
    return myObj;

}

const getLocalStorageData4 = () => {
    let nyyObj = {};
    Object.entries(localStorage).forEach(([key, value], index) => {
        nyyObj[key] = JSON.parse(value);
    });
    return nyyObj;
};

const getLocalStorageData5 = () => {
    return Object.entries(localStorage)
        .reduce((acc, [key, value]) => {
            return {
                ...acc,
                [key]: JSON.parse(value),
            }
        }, {});
};


console.log(getLocalStorageData());
console.log(getLocalStorageData2());
console.log(getLocalStorageData3());
console.log(getLocalStorageData4());
console.log(getLocalStorageData5());
