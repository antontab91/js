export const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    }
};

export const ship = {
    // name: 'Aurora',
    // hasWeels: false,
    // liftAnchorDown() {
    //     console.log('lifting anchor down');
    // },
    // liftAnchorUp() {
    //     console.log('lifting anchor up');
    // },

    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        this.move();
    },
    stopMachine() {
        this.stop();
        console.log(`${this.name} lifting anchor down`);
    }

};

Object.setPrototypeOf(ship, vehicle);


console.log(ship.stopMachine());

