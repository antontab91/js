const rectDiv = document.querySelector('.rect_div');
const rectP = document.querySelector('.rect_p');
const rectSpan = document.querySelector('.rect_span');
const eventsList = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn')
const removeHandlersBtn = document.querySelector('.remove-handlers-btn')
const attachHandlersBtn = document.querySelector('.attach-handlers-btn')


console.log(rectDiv);
console.log(rectP);
console.log(rectSpan);
console.log(eventsList);
console.log(clearBtn);
console.log(removeHandlersBtn);
console.log(attachHandlersBtn);


function logTarget(text, color) {
    // const mySpan = document.createElement('span');
    // mySpan.setAttribute('style', `color:${color}; margin-left:8px`);
    // mySpan.innerText = text;
    // eventsList.append(mySpan);

    eventsList.innerHTML += `<span style="color: ${color}; margin-left:8px;">${text}</span>`;
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

rectDiv.addEventListener('click', logGreyDiv, true);  // погружение 
rectP.addEventListener('click', logGreyP, true);
rectSpan.addEventListener('click', logGreySpan, true);

rectDiv.addEventListener('click', logGreenDiv);
rectP.addEventListener('click', logGreenP);
rectSpan.addEventListener('click', logGreenSpan);


const getClickBtn = () => {
    eventsList.innerHTML = ''; //очищет содержимое класса .events-list
};

const getRemove = () => {
    rectDiv.removeEventListener('click', logGreyDiv, true);  // удаляет обработчик события зарегистрированного ранее с помощью addEventListener(
    rectP.removeEventListener('click', logGreyP, true);
    rectSpan.removeEventListener('click', logGreySpan, true);

    rectDiv.removeEventListener('click', logGreenDiv);
    rectP.removeEventListener('click', logGreenP);
    rectSpan.removeEventListener('click', logGreenSpan);
};
const getAttach = () => {
    rectDiv.addEventListener('click', logGreyDiv, true);  // опять добавляет 
    rectP.addEventListener('click', logGreyP, true);
    rectSpan.addEventListener('click', logGreySpan, true);

    rectDiv.addEventListener('click', logGreenDiv);
    rectP.addEventListener('click', logGreenP);
    rectSpan.addEventListener('click', logGreenSpan);
};

clearBtn.addEventListener('click', getClickBtn);
removeHandlersBtn.addEventListener('click', getRemove);
attachHandlersBtn.addEventListener('click', getAttach);


