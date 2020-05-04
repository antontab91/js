
const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const defaultAvatar = 'https://img.favpng.com/1/3/11/computer-icons-github-user-social-network-png-favpng-AviyaxLFhxtMhcfp0KZ6Xx1Sc.jpg';
userAvatarElem.src = defaultAvatar;

const showBtn = document.querySelector('.name-form__btn');
const nameFormInput = document.querySelector('.name-form__input')

console.log(showBtn, userNameElem, userLocationElem, nameFormInput);

// const options = {
//     method: 'GET',
// }

const renderUserData = userData => {
    // const avatar_url = userData.avatar_url; 
    // const name = userData.name;
    // const location = userData.location;
    const { avatar_url, name, location } = userData;     // запомнить !! раз и навсегда ! можно через диструктуризацию !! 

    userAvatarElem.src = avatar_url;
    userNameElem.textContent = name;
    userLocationElem.textContent = location ?      // елси локейшенр есть тогда фром локейшен , если нет - пустая строка 
        `from ${location}`
        : '';
}

const fetchUserData = (userName) => {
    return fetch(`https://api.github.com/users/${userName}`)  //если не указать опшинс в аргументах - метод автоматически гет , первій аргумент откуда , второй опции в виде обьекта
        .then((response) => {
            // console.log(response);                   // запомнить то что в блоке не должно біть больше одного раза json , а то будет ошибка
            // console.log(response.json())            // пвернули в формате json
            return response.json();
        });
};

const getData = () => {
    const userName = nameFormInput.value;
    fetchUserData(userName)                                 // после подписки первое что нужно сделать - получить данніе пользователя для єтого нужно получить имя пользователя , которое мі хотим получить 
        .then((userData) => {
            // console.log(userData);
            renderUserData(userData);
        });
};

showBtn.addEventListener('click', getData)

// https://api.github.com/users/USERNAME

// avatar_url, location, name