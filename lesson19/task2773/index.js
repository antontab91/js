export default {
    firstName: 'Jonh',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        return [this.firstName, this.lastName] = value.split(' ');
    }
};


// user.fullName = "Petushok Grebeshok";
// console.log(user.firstName);
// console.log(user.lastName);
