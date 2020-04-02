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
        this.name = name;
        this.numberOfWheels = numberOfWheels;
    }

    move() {
        console.log(`${this.name} is moving`);
    }
    stop() {
        console.log(`${this.name} stopped`);
    }
}
export class Ship extends Vehicle {
    constructor(name, maxSpeed) {
        super(name, false);
        this.maxSpeed = maxSpeed;
    }
    move() {
        super.move();
        console.log(`${this.name} lifting anchor up`);
    }
    stop() {
        super.stop();
        console.log(`${this.name} lifting anchor down`);
    }
}
const ship = new Ship('Aurora', 17);
console.log(ship);
ship.stop();
