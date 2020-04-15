const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];


const dayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);

    // console.log(new Date(date));
    // console.log(day);
    // console.log(new Date(dateInFuture));
    return weekDays[new Date(dateInFuture).getDay()];
}

const result = dayOfWeek(new Date(2019, 3, 15), 5);

console.log(result);