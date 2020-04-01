export function getOwnProps(obj) {
    for (let prop in obj) {
        if ((typeof obj.hasOwnProperty(prop)) !== 'function') {
            console.log(prop);
        }
    }
}


