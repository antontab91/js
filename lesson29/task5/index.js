export const delay = (delay, callback, context, ...arg) => {
    setTimeout(() => {
        callback.apply(context, arg);
    }, delay);
};