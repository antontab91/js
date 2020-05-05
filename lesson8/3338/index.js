
const buildObject = (keyList, valuesList) => {
    return keyList.reduce((acc, el, index) => {
        return { ...acc, [el]: valuesList[index] }
    }, {});
};



