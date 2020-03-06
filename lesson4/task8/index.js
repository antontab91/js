
let sum = 0;    // обьявил переменную суммы
for (let i = 1; i <= 1000; i++) {  // посчитал сумму от 0 до 1000
    sum += i;
}

let integerPart = sum / 1234; //посчитал целую часть от деления от суммы на число 1234
console.log(integerPart);
let remainder = sum % 1234; // посчитал остаток от деления 
console.log(remainder);

console.log(integerPart > remainder); // сравнил остаток от деления с целой частью от деления 