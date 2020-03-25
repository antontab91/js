export function defer(func, ms) {
    return function (ms) {
        setTimeout(func.bind(this), ms)
    };
}

export function sayHi() {
    console.log('Hi');
}

export const deferredSayHi = defer(sayHi, 1000);

deferredSayHi();