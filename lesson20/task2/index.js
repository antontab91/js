// export const vehicle2 = {
//     name: 'Argo',
//     move() {
//         console.log(`${this.name} is moving`);
//     },
//     stop() {
//         console.log(`${this.name} stopped`);
//     }
// };

// export const ship2 = {
//     name: 'Aurora',
//     hasWeels: false,
//     liftAnchorDown() {
//         console.log('lifting anchor down');
//     },
//     liftAnchorUp() {
//         console.log('lifting anchor up');
//     },

//     startMachine() {
//         console.log(`${this.name} lifting anchor up`);
//         this.move();
//     },
//     stopMachine() {
//         this.stop();
//         console.log(`${this.name} lifting anchor down`);
//     }

// };

// Object.setPrototypeOf(ship2, vehicle2);
// console.log(ship2.stopMachine());
// console.log(ship2.move());


export class Vehicle {
    constructor(name, numberOfWheels) {
        name = this.name;
        numberOfWheels = this.numberOfWheels;
    }

    move() {
        console.log(`${this.name} is moving`)
    }
    stop() {
        console.log(`${this.name} stopped`)
    }
}

export class Ship extends Vehicle {                              // exteds - ключевое слово указівающее от кого наследоваться 
    constructor(name, maxSpeed) {
        super(name, false);                                       //тут мы с помощью super обратились(как будто візвали со своими значениеями) к  конструктору класса от которого наследовались и взяли из него name , а в numberOfWheels записали false  
        this.maxSpeed = maxSpeed;
    }

    move() {
        console.log(`${this.name} lifting anchor up`);
        super.move();                                               //тут мі візіваем метод , которій наследуется от радительского класса
    }
    stop() {
        super.stop();                                               //тут мі візіваем метод , которій наследуется от радительского класса
        console.log(`${this.name} lifting anchor down`)
    }
}
