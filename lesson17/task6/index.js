export function bind(fn, context) {

    let bindArgs = [].slice.call(arguments, 2);
    return function () {

        let fnArgs = [].slice.call(arguments);

        return fn.apply(context, bindArgs.concat(fnArgs));
    };
};

// export function bind(fn, context) {
//     return function () {
//         return fn.apply(context);
//     };
// }

// http://jsraccoon.ru/interview-bind  - в этой статье теория о том как написать эту функцию , которая мне помогла . 
