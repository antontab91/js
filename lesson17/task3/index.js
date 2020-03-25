export function defer(func, ms) {
    return function () {
        setTimeout(() => func(...arguments), ms);

    };
}

export function sayHi() {
    console.log('Hi');
}

export const deferredSayHi = defer(sayHi, 1000);

deferredSayHi();    