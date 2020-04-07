const elemDiv = document.querySelector('.rect_div');
const elemP = document.querySelector('.rect_p');
const elemSpan = document.querySelector('.rect_span');

const btnClear = document.querySelector('.btn-clear');
const btnRemoveHandleds = document.querySelector('.btn-remove');
const btnAttatchHandleds = document.querySelector('.btn-attach');


function logTarget(text, color) {
    const eventListElem = document.querySelector('.events-list');

    eventListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

function clearLog() {
    const eventListElem = document.querySelector('.events-list');

    eventListElem.innerHTML = '';
}

function removeHandleds() {
    elemDiv.removeEventListener('click', logGreyDiv, true);
    elemP.removeEventListener('click', logGreyP, true);
    elemSpan.removeEventListener('click', logGreySpan, true);

    elemDiv.removeEventListener('click', logGreenDiv);
    elemP.removeEventListener('click', logGreenP);
    elemSpan.removeEventListener('click', logGreenSpan);
}

function attatchHandleds() {
    elemDiv.addEventListener('click', logGreyDiv, true);
    elemP.addEventListener('click', logGreyP, false);
    elemSpan.addEventListener('click', logGreySpan, true);


    elemDiv.addEventListener('click', logGreenDiv);
    elemP.addEventListener('click', logGreenP);
    elemSpan.addEventListener('click', logGreenSpan);
}


const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');



elemDiv.addEventListener('click', logGreyDiv, true);
elemP.addEventListener('click', logGreyP, true);
elemSpan.addEventListener('click', logGreySpan, true);


elemDiv.addEventListener('click', logGreenDiv);
elemP.addEventListener('click', logGreenP);
elemSpan.addEventListener('click', logGreenSpan);

btnClear.addEventListener('click', clearLog);
btnRemoveHandleds.addEventListener('click', removeHandleds);
btnAttatchHandleds.addEventListener('click', attatchHandleds);
