const users = [
    { id: '1', name: 'Bob' },
    { id: '2', name: 'Tom' },
    { id: '3', name: 'Sam' },
    { id: '4', name: 'Tad' }
];

const admins = ['1', '3'];




const markAdmins = (users, admins) => {
    users.map((el) => {
        const isAdmin = admins.includes(el.id);
        let newUsr = [...el, isAdmin];
    });
};



markAdmins(users, adminIds);

