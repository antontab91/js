export class Wallet {
    constructor() {
        this._balance = 0;
    }

    getBalance() {
        return this._balance;
    }
    deposit(sum) {
        this._balance += sum;
    }

    withdraw(sum) {
        if (amount > this._balance) {
            console.log(`No enough funds`);
            return;
        }
        return this._balance -= sum;
    }
}


