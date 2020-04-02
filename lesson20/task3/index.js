export class Wallet {
    constructor() {
        this.balance = 0;
    }

    getBalance() {
        return this.balance;
    }
    deposit(sun) {
        this.balance = this.balance + sum;
    }

    withdraw(sum) {
        if (this.balance < sum) {
            console.log(`No enough funds`);
            return;
        }
        this.balance = this.balance + sum;
    }
}