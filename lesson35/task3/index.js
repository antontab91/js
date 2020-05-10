import { fetchUserData, fetchRepositories } from './gateways.js';
import { renderUserData } from './user.js';
import { renderPepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';



const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';  //начальный аватар

const defaultUser = {
    avatar_url: defaultAvatar,
    name: '',
    location: '',
};

renderUserData(defaultUser);

const showBtn = document.querySelector('.name-form__btn');
const nameFormInput = document.querySelector('.name-form__input');


const getData = () => {
    showSpinner();
    cleanReposList();
    const userName = nameFormInput.value;
    fetchUserData(userName)                                 // после подписки первое что нужно сделать - получить данніе пользователя для єтого нужно получить имя пользователя , которое мі хотим получить 
        .then((userData) => {
            renderUserData(userData);
            return userData.repos_url;
        }).then((userDataReposUrl) => {
            fetchRepositories(userDataReposUrl)
                .then((reposList) => {
                    console.log(reposList);
                    renderPepos(reposList);
                    hideSpinner();
                })
                .catch((err) => {
                    hideSpinner();
                    alert('Failed to load data');
                });
        });
};

showBtn.addEventListener('click', getData)
