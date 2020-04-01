export const obj1 = {
    name: "saas",
    bubu() {
        console.log(this.name)
    }

}

export function getOwnProps(obj) {
    let arr = [];
    for (let prop in obj) {
        if (typeof obj[prop] !== 'function' && obj.hasOwnProperty(prop)) {
            arr.push(prop);
        }
    }
    return arr;
}


console.log(getOwnProps(obj1));