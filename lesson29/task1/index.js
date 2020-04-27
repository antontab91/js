export const addImage = (imgSrc) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;

    const containerElem = document.querySelector('.page');

    containerElem.append(imgElem);

    const { width, height } = imgElem;
    console.log({ width, height });
    return { width, height };
};

const imgSrc = 'https://2krota.ru/wp-content/uploads/2019/02/0_i-1.jpg';

const data = addImage(imgSrc);
const { width, height } = data;

const sizeElem = document.querySelector('.image-size');
sizeElem.textContent = `${width} x ${height}`;

// addImage('https://server.com/image.png', callback)