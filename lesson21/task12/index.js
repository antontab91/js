export function squaredNumbers() {
    let arr = [...document.querySelectorAll('.number')];
    arr.forEach(function (el) {
        let attrValue = el.getAttribute('data-number');
        // console.log(arr);
        // console.log(attrValue)
        // console.log(typeof attrValue)
        // console.log(Math.pow(attrValue, 2));
        el.setAttribute('data-squared-number', Math.pow(attrValue, 2));
    });
}


// export const squaredNumbers = () => Array
//     .from(document.querySelectorAll('.number'))
//     .forEach(elem => elem.setAttribute('data-squared-number', Math.pow(elem.dataset.number, 2)));

// squaredNumbers()
