const getMessagesForBestStudents = (students, notPassed) =>
    students
        .filter(name => notPassed.indexOf(name) === -1)
        .map(item => 'Good job, ' + item);