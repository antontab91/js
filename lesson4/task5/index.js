// let m = 10;
// let n = 48;
// let result = 0;

// for (let i = m; i <= n; i++) {
//     if (i % 2 == 0 && i % 4 != 0) {
//         result = result + i;
//     } else if (i % 3 == 0) {
//         result = result - i;
//     } else if (i % 4 == 0) {
//         result = result * i;
//     }

//     if (i % 5 == 0) {                 //тут вывожу число кратное 5 , даже если оно подходит подвышеуказанные условия 
//         console.log(i);
//     }
// }



const m = 10;
const n = 50;
let i = m;
let result = 0;

for (; i <= n; i++) {
    if (i % 5 === 0) {
        console.log(i);
        continue;
    }
    if (i % 2 === 0 && i % 4 !== 0) {
        result += i;
        continue;
    }
    if (i % 3 === 0) {
        result -= i;
        continue;
    }
    if (i % 4 === 0) {
        result *= i;
        continue;
    }
}
