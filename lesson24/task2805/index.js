// 1. Create function getStudentsBirthDays
// 2. input: [{ name: 'Tom', birthDate: '01/15/2010' }, { name: 'Ben', birthDate: '01/17/2008' }, { name: 'Sam', birthDate: '03/15/2010' }]
//    output: { Jan: ['Tom', 'Ben'], Mar: ['Sam'] }
// 3. Detect month of birth and group
// 4. Sort students inside the month
// 5. Leave only names

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

function getStudentsBirthDays(studentsList) {
    const studentsObj = studentsList.reduce((acc, student) => {
        // console.log(student);
        const monthNumber = new Date(student.birthDate).getMonth();
        const monthName = monthNames[monthNumber];
        const oldStudents = acc[monthName] ? acc[monthName] : []
        console.log(new Date(student.birthDate).getMonth());
        return {
            ...acc, [monthName]: oldStudents.concat(student)
        }
    }, {});

    for (let month in studentsObj) {
        const sortedStudents = studentsObj[month].sort((a, b) => {
            return (
                new Date(a.birthDate).getDate() -
                new Date(b.birthDate).getDate()
            );
        });
        const studentsNames = sortedStudents.map((student) => student.name);
        studentsObj[month] = studentsNames;
    }

    return studentsObj;
}

const studentsList = [
    { name: 'Tom', birthDate: '01/15/2010' },
    { name: 'Ben', birthDate: '01/17/2008' },
    { name: 'Sam', birthDate: '03/15/2010' }
];

const result = getStudentsBirthDays(studentsList);

console.log(result);