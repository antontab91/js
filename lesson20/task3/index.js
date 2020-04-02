export class Wallet {
    constructor() {
        this._balance = 0;
    }

    getBalance() {
        return this._balance;
    }
    deposit(sun) {
        this._balance = this._balance + sum;
    }

    withdraw(sum) {
        if (this._balance < sum) {
            console.log(`No enough funds`);
            return;
        }
        return this._balance = this._balance - sum;
    }
}