// export function getTitle() {
//     let titleText = document.querySelector('.title').textContent;
//     console.dir(titleText);
//     console.log(titleText);
//     return titleText;
// }



// export function getDescription() {
//     let aboutText = document.querySelector('.about').innerText;
//     console.dir(aboutText);
//     console.log(aboutText);
//     return aboutText;
// }



// export function getPlans() {
//     let plansText = document.querySelector('.plans').innerHTML;
//     console.dir(plansText);
//     console.log(plansText);
//     return plansText;
// }



// export function getGoal() {
//     let goalText = document.querySelector('.goal').outerHTML;
//     console.dir(goalText);
//     console.log(goalText);
//     return goalText;
// }




export function getTitle() {
    return document.querySelector('.title').textContent;
};
getTitle();

export function getDescription() {
    return document.querySelector('.about').innerText;
};
getDescription();

export function getPlans() {
    return document.querySelector('.plans').innerHTML;
}
getPlans();

export function getGoal() {
    return document.querySelector('.goal').outerHTML;
};
getGoal();