const listElem = document.querySelector('.repo-list');

export const cleanReposList = () => {
    listElem.innerHTML = '';
}


export const renderPepos = (reposList) => {
    const reposListElem = reposList
        .map(({ name }) => {                         // не забівай что тут записано через диструктуризацию , можно записать и так el
            const listElem = document.createElement('li');
            listElem.classList.add('repo-list__item');
            listElem.textContent = name;                        // a tut mojno togda ukazat el.name

            return listElem;
        });
    cleanReposList();
    listElem.append(...reposListElem);
};



