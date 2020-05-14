console.log('Hello, world!');

function getDrinksWithStep(guests, step) {
    let drinksCount = 0;

    for (let i = 0; i <= guests; i++) {
        if (i % step === 1) {
            drinksCount = drinksCount + i;
            console.log(drinksCount);
        }
    }

    return drinksCount;

}

getDrinksWithStep(10, 3)
