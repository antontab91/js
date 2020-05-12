export function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const caunter1 = makeCounter();
const caunter2 = makeCounter();

console.log(caunter1());
console.log(caunter1())
console.log(caunter1())
console.log(caunter2())
console.log(caunter1())
console.log(caunter2())