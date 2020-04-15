export function getDiff(startDate, endDate) {
    let diff = new Date(startDate) - new Date(endDate);

    console.log(new Date(startDate));
    console.log(new Date(endDate));
    return diff / (60 * 60 * 24 * 1000);
}

console.log(getDiff('1993-03-04 22:22:22', '1992-03-04 00:00:00')); 