export function defer(func, ms) {
    return function () {

        setTimeout(() => func.apply(user, arguments), ms);

    };
}

const user = {
    name: 'Tom',
    sayHi() {
        console.log(`Hi, I'am ${this.name}!`);
    }
}

export const deferredSayHi = defer(user.sayHi, 1000);

deferredSayHi("dssd");    