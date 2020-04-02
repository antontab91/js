export class Order {
    constructor(price, city, type) {
        this.id = Math.random.toString();
        this.price = price;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = 0;
        this.city = city;
        this.type = type;
    }

    checkPrice() {
        if (this.price > 1000) {
            return true;
        }
        return false;
    }

    confirmOrder() {
        if (!this.isConfirmed) {                     // если статус не подтверждн ( а он по умолчанию не подтвержден )
            this.isConfirmed = true;                            // подтверждаем 
        }
        this.dateConfirmed = new Date();                             //     выставляем новую дату
    }
    isValidType() {
        if (this.type === 'Buy' || this.type === 'Sell') {          // если тип равен бай или сел - єто хорошо , в простивном случае борода 
            return true;
        }
        return false;
    }
}