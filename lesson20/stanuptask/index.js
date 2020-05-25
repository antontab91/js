// class Sportsman {
//   constructor(age, name) {
//     this.name = name;
//     this.age = age;
//     this.married = false;
//   }

//   run() {
//     console.log(`${this.name} is running`);
//   }

//   toString() {
//     console.log('Pa-bam');
//   }
// }

// const user1 = new Sportsman('Bob', 17);
// console.log(user1);

// user1.run();


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