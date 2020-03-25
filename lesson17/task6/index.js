function bind(fn, context) {

    let bindArgs = [].slice.call(arguments, 2);
    return function () {

        var fnArgs = [].slice.call(arguments);

        return fn.apply(context, bindArgs.concat(fnArgs));
    };
};


// http://jsraccoon.ru/interview-bind  - в этой статье подсмотрел как написать 

