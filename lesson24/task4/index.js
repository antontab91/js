const studentsArr = [
    { name: 'Tom', birthDate: '01/15/2010' },
    { name: 'Ben', birthDate: '01/17/2008' },
    { name: 'Sam', birthDate: '03/15/2010' },
    { name: 'Bob', birthDate: '05/31/2008' },
    { name: 'Gram', birthDate: '01/11/2003' },
    { name: 'Alex', birthDate: '05/15/2010' }
];
const mouthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export function studentsBirthDays(studentsArr) {
    const returnObj = {};
    const newArr = studentsArr.slice().sort((a, b) => {
        new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate();
    });
    newArr.map((elem) => {
        console.log(new Date(elem.birthDate).getMonth());
        const elemCount = new Date(elem.birthDate).getMonth();
        // console.log(returnObj[mouthArr(elemCount)])
        if (returnObj[mouthArr[elemCount]] === undefined) {
            returnObj[mouthArr[elemCount]] = [];
        }
        returnObj[mouthArr[elemCount]].push(elem.name)

    });
    return returnObj;

}

// console.log(studentsBirthDays(studentsArr));
// studentsBirthDays(studentsArr)

// function studentsBirthDays(studentsArr) {
//     const sortStudentsArr = studentsArr.slice().sort(function (a, b) {
//         return new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate();
//     });

//     let iteration = 0;
//     console.log(sortStudentsArr);

//     return sortStudentsArr.reduce(function (acc, { name, birthDate }) {
//         const nameOfMounth = mouthArr[new Date(birthDate).getMonth()];
//         // console.log(nameOfMounth)
//         console.log(`итерация номер ${iteration}`, acc)
//         iteration++;
//         console.log([nameOfMounth])
//         return {

//             ...acc, [nameOfMounth]: acc[nameOfMounth]          // если месяц уже имеется в акамуляторе 
//                 ? acc[nameOfMounth].concat(name)          // тогда конкатенируем итмена 
//                 : [name]                            // если месяца еще не было - тогда пишем масив с менеме

//         };
//     }, {});

//     // console.log(sortStudentsArr);

// };






