export const fetchUserData = (userName) => {
    return fetch(`https://api.github.com/users/${userName}`)  //если не указать опшинс в аргументах - метод автоматически гет , первій аргумент откуда , второй опции в виде обьекта
        .then((response) => {
            // console.log(response);                   // запомнить то что в блоке не должно біть больше одного раза json , а то будет ошибка
            // console.log(response.json())            // пвернули в формате json
            return response.json();
        });
};

export const fetchRepositories = (reposUrl) => {
    return fetch(reposUrl)
        .then((response) => {
            console.log(response);
            return response.json();
        });
}; 