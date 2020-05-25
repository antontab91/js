// export class Sportsman {
//   constructor(name) {
//     this.name = name;
//   }
//   run() {
//     console.log(`${this.name} is running`);
//   }
//   // toString(){
//   //   console.log('pa-bam');

//   // }
// }

// const user1 = new Sportsman('John')
// // user1.run()

// export class Swimmer extends Sportsman {
//   constructor(name, style) {
//     super(name)
//     this.style = style
//   }
//   swim() {
//     console.log(`${this.name} is swimming ${this.style}`);

//   }
// }

// const sw1 = new Swimmer('John', 'breaststroke')
// console.log(sw1);
// sw1.swim()


export class Sportsman {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`${this.name} is running`);
  }
}

export class Swimmer extends Sportsman {
  constructor(name, style) {
    super(name);
    this.style = style;
  }
  swim() {
    console.log(`${this.name} is swimming ${this.style}`);
  }
}

