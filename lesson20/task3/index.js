export class Wallet {
    constructor() {
        this._balance = 0;
    }
    getBalance() { return this._balance }
    deposit(amount) {
        this._balance += amount;
    }
    withdraw(amount) {
        if (amount > this._balance) {
            console.log(`No enough funds`);
            return;
        }
        return this._balance -= amount;
    }
}
