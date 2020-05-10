import { fetchUserData, fetchRepositories } from './gateways.js';
import { renderUserData } from './user.js';
import { renderPepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';



const defaultAvatar = 'https://img.favpng.com/1/3/11/computer-icons-github-user-social-network-png-favpng-AviyaxLFhxtMhcfp0KZ6Xx1Sc.jpg';  //начальный аватар

const defaultUser = {
    avatar_url: defaultAvatar,
    name: 'Petya',
    location: 'Petushok',
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
                })
                .catch((err) => {
                    alert(err.message);
                })
                .finally(() => {
                    hideSpinner();
                });
        });
};

showBtn.addEventListener('click', getData)
