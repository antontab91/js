
const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const dayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const futureDay = new Date(date).setDate(day + days);

    return weekDays[new Date(futureDay).getDay()];
};



export { dayOfWeek };