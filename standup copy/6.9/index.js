class Animal {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

const a1 = new Animal('Jack');

console.log(a1);