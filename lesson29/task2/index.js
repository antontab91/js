

export const pinger = (num, period) => {
    // const interval = setInterval(() => {
    //     console.log('Ping');
    // }, period);

    // setTimeout(() => {
    //     clearInterval(1);
    // }, period * num);


    // console.log(interval);// в переменной интервал сейчас находится идентификатор собітия веб апи



    let i = num;
    console.log('Ping')
    const interval = setInterval(() => {
        if (--i > 0) {
            console.log('Ping');
        } else {
            clearInterval(interval);
        }

    }, period);

};

pinger(5, 1000);

