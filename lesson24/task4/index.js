const students = [
    { name: 'Tom', birthDate: '01/15/2010' },
    { name: 'Ben', birthDate: '01/17/2008' },
    { name: 'Sam', birthDate: '03/15/2010' },
    { name: 'Bob', birthDate: '02/31/2008' },
    { name: 'Gram', birthDate: '01/11/2003' },
    { name: 'Alex', birthDate: '05/15/2010' }
];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const studentsBirthDays = students => {
    const sortedStudents = students.sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate());

    // console.log(new Date('01/17/2008').getDate())    // берет дату 
    const res = sortedStudents.reduce((acc, { name, birthDate }) => {
        // console.log(acc);
        console.log({ name, birthDate });        // обьект
        // const monthsName = months[new Date(birthDate).getMonth()];
        // return { ...acc, [monthsName]: acc[monthsName] ? acc[monthsName].concat(name) : [name] };
    }, {});

    return res;

};


// const students = [
//     { name: 'Tom', birthDate: '01/15/2010' },
//     { name: 'Ben', birthDate: '01/17/2008' },
//     { name: 'Sam', birthDate: '03/15/2010' },
//     { name: 'Bob', birthDate: '02/31/2008' },
//     { name: 'Gram', birthDate: '01/11/2003' },
//     { name: 'Alex', birthDate: '05/15/2010' }
// ];

// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// function studentsBirthDays(students) {
//     const newArrStudents = students.slice();  // создаем новій массив , чтобі не менять исходный 
//     const sortStudens = newArrStudents.sort(function (a, b) {
//         return new Date(a.birthDate) - new Date(b.birthDate);
//     });
//     console.log(sortStudens);
// }

console.log(studentsBirthDays(students));