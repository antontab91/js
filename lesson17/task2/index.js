export const callbackPrompt = {
    message: 'Tell me your number',
    showPrompt() {
        const phoneNumber = prompt(this.message);   // чтобы использовать данные , которые ввел пользователь нужно промпт присвоить переменной 
        console.log(phoneNumber);
    },

    showDeferredPrompt(ms) {
        setTimeout(this.showPrompt.bind(this), ms);
        // this.showPrompt();
    }
}

callbackPrompt.showDeferredPrompt(4000);
callbackPrompt.showDeferredPrompt();


// export const callbackPrompt = {
//     message: `write the message`,
//     showPrompt() {
//         let message = prompt(this.message);
//         console.log(message);
//     },
//     showDeferredPrompt(sec) {
//         setTimeout(setTimeout(() => {
//             this.showPrompt()
//         }, sec));
//     }
// }

// callbackPrompt.showDeferredPrompt(5000);