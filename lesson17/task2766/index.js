// function printMessage(age, city) {
//   console.log(`Hello ${this.firstName}, email ${this.email}, age: ${age}, city: ${city}`);
// }

// let user = {
//   firstName: 'Alex',
//   email: 'gamil.com',
// }

// let func = printMessage.bind(user);
// func(30, 'Kiev');


// //1 use bind

// //input: func , obj, arg1, arg2, argN
// //output: function

// function bind1(func, context, ...ages) {
//   return func.bind(context, ...ages);
// }

// let binded = bind1(printMessage, user, 30, 'Kiev')();
// bind1(printMessage, user)(30, 'Kiev');
// bind1(printMessage, user, 30)('Kiev');
// bind1(printMessage, user, 30, 'Kiev')();

// //use call/apply
// // function bind(func, context, ...ages) {

// // }


// //algo
// //custom bind
// //put func to the context
// //call func as object property

// export function bind(func, context, ...args) {

//   return function (...args1) {
//     let copyContext = Object.assign({}, context)
//     copyContext.temp = func;
//     return copyContext.temp(...args, ...args1);
//   };
// }

// function bind4(func, context, ...args) {
//   return function (...funcArgs) {
//     // return func.call(context, funcArgs.concat(args));
//     return func.call(context, ...funcArgs, ...args);
//   }
// }


// console.log(user);


export function bind(context, func, ...xz) {
  console.log(...xz)
  return function (...arg) {
    console.log(...arg)
    return func.apply(context, [...xz, ...arg]);
  };
}