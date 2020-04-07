export function getItemsList() {
    let allElementsWhisClassTechnology = document.querySelectorAll('.technology');
    console.dir(allElementsWhisClassTechnology);
    return allElementsWhisClassTechnology;
}

export function getItemsArray() {
    let allElementsWhisClassTool = document.querySelectorAll('.tool');
    let arr = [...allElementsWhisClassTool];
    console.log(arr);
    console.dir(arr);
    return arr;
}
getItemsList();
getItemsArray();