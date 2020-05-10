export const fetchUserData = (userName) => {
    return fetch(`https://api.github.com/users/${userName}`)  //если не указать опшинс в аргументах - метод автоматически гет , первій аргумент откуда , второй опции в виде обьекта
        .then((response) => {
            // console.log(response);                   // запомнить то что в блоке не должно біть больше одного раза json , а то будет ошибка
            // console.log(response.json())            // пвернули в формате json

            if (response.status === 200) {
                return response.json();
            }

            throw new Error('Failed to load data');
        });
};

export const fetchRepositories = (reposUrl) => {
    return fetch(reposUrl)
        .then((response) => {
            if (response.ok) {                      // тоже самое что и ітатус === 200
                console.log(response);
                return response.json();
            }

            throw new Error('Failed to load data');
        });
}; 