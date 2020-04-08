let arr = [...document.querySelectorAll('.number')];
console.log(arr);
export function squaredNumbers(arr) {
    arr.forEach(function (el) {
        let attrValue = el.getAttribute('data-number');
        // console.log(attrValue)
        // console.log(typeof attrValue)
        // console.log(Math.pow(attrValue, 2));
        el.setAttribute('data-squared-number', Math.pow(attrValue, 2));
    });
}

squaredNumbers(arr)