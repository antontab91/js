export function squaredNumbers() {
    let arr = [...document.querySelectorAll('.number')];
    console.log(arr);
    arr.forEach(function (elem) {
        console.log(elem);
        return elem.setAttribute('data-squared-number', Math.pow(elem.dataset.number, 2));
    })

}
squaredNumbers()