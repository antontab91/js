


function getAdults(obj) {
    let newObj = {};
    for (key in obj) {
        console.log(obj[key]);
        if (obj[key] >= 18) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
