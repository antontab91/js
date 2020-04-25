const counterElem = document.querySelector('.counter');                // общий элемент              
const counterValueElem = document.querySelector('.counter__value');   // елемент элемент самих цифр кантера 

const changeCount = (event) => {
    const counterButton = event.target.classList.contains('counter__button');     // переменной counterButton прсваеваем тру если цель ивента(тоесть клик) был совершен по элементу , который имеет класс counter__button
    console.log(counterButton);

    if (!counterButton) {
        console.log('ne popal');
        return;                                 // если counterButton не тру (тоесть клик(ивент таргет) біл сделан не по нужному класу) - выходим 
    }

    const action = event.target.dataset.action === 'decrease';   // присваеваем 
    console.log(action);

    const oldValue = Number(counterValueElem.textContent);
    console.log(oldValue);



    const newValue = action === 'decreace' ?
        oldValue - 1 :
        oldValue + 1;

    localStorage.setItem('counterValue', newValue);

    counterValueElem.textContent = newValue;
};

counterElem.addEventListener('click', changeCount); // по клику полностью на контейнер срабатівает функция 