export function getOwnProps(obj) {
    let arr = [];
    for (let prop in obj) {
        if ((typeof obj.hasOwnProperty(prop)) !== 'function') {
            arr.push(prop);
        }
    }
    return arr;
}
