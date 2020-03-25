export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        let fullName = `${this.firstName} ${this.lastName}`;
        return fullName;
    },

    setFullName: function (fullName) {
        let separateName = fullName.split(' ');
        this.firstName = separateName[0];
        this.lastName = separateName[1];
    },
}


