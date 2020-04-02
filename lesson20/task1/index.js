
export function User2(name, age) {                   // конструктор функция *( по старому ) и конструктор внутри клсса выполняют одни и те же задачи
    this.name = name;
    this.age = age;
}
User2.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
}
User2.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`);
};
User2.prototype.setAge = function (age) {
    if (age < 0) { return false; }
    this.age = age;
    if (age >= 25) { this.requestNewPhoto() }
    return age;
};


export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static createEmpty() {
        return new User('', null);
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }
    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }
    setAge(age) {
        if (age < 0) { return false; }
        this.age = age;
        if (age >= 25) { this.requestNewPhoto() }
        return age;
    }
}

const user2 = new User2('Miska-Taptiska', 21);
console.log(user2);
console.log(user2.sayHi());
console.log(user2.setAge(15));
console.log(user2);
console.log(user2.setAge(1781));
console.log(user2);


const user = new User('Mokshan', 54);
console.log(user);
console.log(user.sayHi());
console.log(user.setAge(105));
console.log(user);
console.log(user.setAge(11));
console.log(user);



console.log(user);
console.log(user2);

