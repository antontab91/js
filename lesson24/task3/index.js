export function getDiff(startDate, endDate) {
    let diff = new Date(startDate) - new Date(endDate);

    // console.log(new Date(startDate));
    // console.log(new Date(endDate));
    // console.log(new Date(diff));
    // return diff;
    // console.log(new Date('1993-03-04 22:22:22'));
    // console.log(new Date(1993, 3, 4, 22, 22, 22));
    // console.log(new Date(2011, 0, 1, 0, 0, 0, 0));

    // let date1 = new Date(1993, 3, 4, 22, 22, 22);
    // let date2 = new Date('1993-03-04 22:22:22');
    // console.log(date1.getFullYear());
    // console.log(date2.getMonth());
    // console.log(new Date(diff).getMonth());
    // console.log(new Date(diff).getFullYear());
    // console.log(new Date(diff).getFullYear() + ' ' + new Date(diff).getMonth() + ' ' + new Date(diff).getHours());
    // return (`${diff.getDay()} ${diff.getHours()} `)
    // return Math.floor((Date.parse(startDate) - Date.parse(endDate)) / 86400000)

    console.log(diff);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));      //СУКА БЛЯТЬ ! 1000*60*60*24  1000 миллисекунд в секунде , 60секунд в минуте , 60минут в часе , 24 часа в сутках 
    const hovers = Math.floor(diff / (1000 * 60 * 60) % 24);       //
    const minutes = Math.floor(diff / (1000 * 60) % 60);
    const seconds = Math.floor(diff / (1000) % 60);
    console.log(days);
    console.log(hovers);
    console.log(minutes);
    console.log(seconds);

    return `${days}d ${hovers}h ${minutes}m ${seconds}s`

}

console.log(getDiff('1991-06-17 06:22:58', '1995-07-13 09:00:00')); 