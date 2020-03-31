export function bind(fn, context) {

    let bindArgs = [].slice.call(arguments, 2);
    return function () {

        let fnArgs = [].slice.call(arguments);

        return fn.apply(context, bindArgs.concat(fnArgs));
    };
};

// export function bind(fn, context) {
//     return function (...arg) {
//         return fn.apply(context, [...arg]);
//     };
// }

// export function bind(context, func, ...xz) {
//     console.log(...xz)
//     return function (...arg) {
//         console.log(...arg)
//         return func.apply(context, [...xz, ...arg]);
//     };
// }

// http://jsraccoon.ru/interview-bind  - в этой статье теория о том как написать эту функцию , которая мне помогла . 
