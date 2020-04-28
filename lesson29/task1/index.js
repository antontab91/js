const imgSrc = 'https://2krota.ru/wp-content/uploads/2019/02/0_i-1.jpg';


export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    const pageContainer = document.querySelector('.page');

    imgElem.src = imgSrc;
    imgElem.setAttribute('alt', 'картинка');
    pageContainer.append(imgElem);

    const onImageLoaded = () => {
        const { width, height } = imgElem;
        callback(null, { width, height });
    }

    const onImageErrorLoaded = () => {
        callback('Image load failed');
    }

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', onImageErrorLoaded);
    // const { width, height } = imgElem;


};

const myCallback = (error, data) => {
    if (error) {
        return;
    }

    const { width, height } = data;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
    console.log(`${width} ${height}`);



}


addImage(imgSrc, myCallback);