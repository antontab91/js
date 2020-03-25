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

// callbackPrompt.showDeferredPrompt(4000);
// callbackPrompt.showDeferredPrompt();