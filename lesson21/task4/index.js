export function getTitle() {
    let titleText = document.querySelector('.title').textContent;
    console.dir(titleText);
    console.log(titleText);
    return titleText;
};

getTitle()

export function getDescription() {
    let aboutText = document.querySelector('.about').innerText;
    console.dir(aboutText);
    console.log(aboutText);
    return aboutText;
}

getDescription();

export function getPlans() {
    let plansText = document.querySelector('.plans').innerHTML;
    console.dir(plansText);
    console.log(plansText);
    return plansText;
}

getPlans()

export function getGoal() {
    let goalText = document.querySelector('.goal').outerHTML;
    console.dir(goalText);
    console.log(goalText);
    return goalText;
}

getGoal() 