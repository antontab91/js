/* Этот код менять не нужно */
const anotherUser = null;
const defaultUserName = 'anonymus';
const isAdmin = false;
const isLoggedIn = Boolean(userName);
const message = 'text';
const anotherMessage = 'text as well';
const userName = 'John';


const activeUser = anotherUser || defaultUserName;
const hasAccess = isAdmin || isLoggedIn;
const isTruthy = message < anotherMessage;
const isFalsy = !isLoggedIn;
const isNotTrue = typeof message === 'number';
const isTrue = typeof message != 'boolean';


console.log(activeUser);
console.log(hasAccess);
console.log(isTruthy);
console.log(isFalsy);
console.log(isNotTrue);
console.log(isTrue);
