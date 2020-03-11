let allStudents = ['Ann', 'Tom', 'Bob', 'Kate'];
let notPassed = ['Tom', 'Bob'];

const getMessagesForBestStudents = (allStudents, notPassed) =>
    students
        .filter(name => notPassed.indexOf(name) === -1)
        .map(item => 'Good job, ' + item);


// function getMessagesForBestStudentsO(allStudents, notPassed) {
//     const passedStudents = allStudents.filter(name => (notPassed.indexOf(name) === -1))
//     return passedStudents;
// }

console.log(getMessagesForBestStudentsO(allStudents, notPassed));