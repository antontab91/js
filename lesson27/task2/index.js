const counterElem = document.querySelector('.counter');                // общий элемент              
const counterValueElem = document.querySelector('.counter__value');   // елемент элемент самих цифр кантера 

const changeCount = (event) => {
    const counterButton = event.target.classList.contains('counter__button');     // переменной counterButton прсваеваем тру если цель ивента(тоесть клик) был совершен по элементу , который имеет класс counter__button
    // console.log(counterButton);

    if (!counterButton) {
        console.log('ne popal');
        return;                                 // если counterButton не тру (тоесть клик(ивент таргет) біл сделан не по нужному класу) - выходим 
    }

    const action = event.target.dataset.action;   // равен  'decrease' или 'increase' в зависимости от того на какую кнопку клик 
    console.log(action);

    const oldValue = Number(counterValueElem.textContent);  // тут мы получаем значение элемента самих цифр и присваевавем переменной олвалью  
    // console.log(oldValue);



    const newValue = action === 'decreace' ?      // если action равен decreace(отнимание) то от старого значения мы отнимаем один и в новое значение присваиваем нею велью , если инкрис то прибовляемям
        oldValue - 1 :
        oldValue + 1;

    console.log(newValue);

    localStorage.setItem('counterValue', newValue);  // записіваем свойтво counterValue в обьект локал сторедж со значением нью велью

    counterValueElem.textContent = newValue;  // записываем  значение нью велью в элемент самих цифр 
};

counterElem.addEventListener('click', changeCount); // по клику полностью на контейнер срабатівает функция 