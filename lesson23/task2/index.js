const generateNumbersRange = (from, to) => {           // єто функция генератор массива , такого как  renderArena аля [1, 2, 3] , но тут єто генерит от указанного до указанного 
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i);
    }

    return result;
}

const getLinesSeats = () => {                                      // обьяснение аналогично как и в renderArena
    return generateNumbersRange(1, 10).map(seatNumber => `
        <div class="sector__seat" 
        data-seat-number=${seatNumber}
        ></div>
    `).join('');
}

const getSectorLines = () => {
    return generateNumbersRange(1, 10).map(lineNumber => `
        <div 
        class="sector__line" 
        data-line-number="${lineNumber}"
        >${getLinesSeats()}</div>  
    `).join('');
}


const arenaElem = document.querySelector('.arena');    //арена - єлемент куда будем пихать строку из дивовов

const renderArena = () => {
    //строка из дивов мы проходимся мепом , гереим дивы и вставляем номера в дата атрибуты сектор намбер      
    const sectorsString = [1, 2, 3].map(sectorNumber => `   
        <div 
        class="sector" 
        data-sector-number="${sectorNumber}"
        >${getSectorLines()}</div>                       
    `).join('');                                       // функция getSectorLines() генерит ряды

    arenaElem.innerHTML = sectorsString;   // вставляем в арену три строки с помощью иннер штмл , можно и черед апенд вставить 
};

const onSeatSelect = event => {
    // if (!event.target.className == 'sector__seat') {          // это тььоде самое но лучше записать через класслист контаинс
    //     return;
    // }
    // console.log(event.target.className == 'sector__seat');
    const isSeat = event.target.classList.contains('sector__seat');
    if (!isSeat) {                                                      //проверка,  если цель ивента не имеет класса 'sector__seat' прекращаем работу
        return;
    }

    const seatNumber = event.target.dataset.seatNumber;             // тут data-seat-number цели события ( грубо говоря єлементу по которому кликнули )
    const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;               //  тут data-line-number Ближайшего єлемента с классом sector__line от цели события
    const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;
    // console.log(sectorNumber);

    const selectedSeatElem = document.querySelector('.board__selected-seat');
    selectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;


};

arenaElem.addEventListener('click', onSeatSelect);

renderArena();