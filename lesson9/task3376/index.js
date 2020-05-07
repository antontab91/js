const users = [
    { id: '1', name: 'Bob' },
    { id: '2', name: 'Tom' },
    { id: '3', name: 'Sam' },
    { id: '4', name: 'Tad' },
];

const admins = ['1', '3'];




const markAdmins = (users, adminsId) => {
    return users.map((user) => {
        const isAdmin = adminsId.includes(user.id);  // дописываем обьекту поле 
        return { ...user, isAdmin };
    });
};



console.log(markAdmins(users, admins));

