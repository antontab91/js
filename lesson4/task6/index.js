let sum = 0;

for (let i = 0; i <= 1000; i++) {              // в промежутке от 0 до 1000 
    sum = sum + i;                              //сумма всех чисел 
    if (i % 2 != 0) {                            // если число не кротно двум - вывожу в консоль фаунд
        console.log('Found');
    }
    if (sum * 5 > 5000) {                            // если число умноженное на 5 больше 5000 - вывожу в конгсоль биггер 
        console.log('Bigger');
    }
    else {
        console.log('Smaller');                       // в противном случе вывожу смоллер
    }
}