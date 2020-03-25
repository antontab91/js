export function defer(func, ms) {
    return function () {
        setTimeout(() => func(...arguments), ms);

    };
}

const user = {
    name: 'Tom',
    sayHi() {
        console.log(`Hi, I'am ${this.name}!`);
    }
}

export const deferredSayHi = defer(user.sayHi.bind(user), 1000);

deferredSayHi();    