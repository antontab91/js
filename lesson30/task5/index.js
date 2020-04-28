const imgUrl = 'https://s3.tproger.ru/uploads/2017/04/11-js-tricks-880x308.png';

export const addImage = (url, callback) => {
    const img = document.createElement('img');
    img.setAttribute('alt', 'User avatar');
    img.src = url;

    const pageElem = document.querySelector('.page');
    pageElem.append(img);

    const onImageLoaded = () => {
        const { width, height } = img;
        callback(null, { width, height });
    }

    const onImageLoadError = () => callback('Image load failed');

    img.addEventListener('load', onImageLoaded);

    img.addEventListener('error', onImageLoadError);
};

export const addImageV2 = (imgUrl) => {
    const addImage = new Promise((resolve, reject) => {
        const pageElem = document.querySelector('.page');
        const sizeCont = document.querySelector('.image-size');  // чтобы прошла проверка на громкод, если я еще буду проверять, нужно эти строки закомментить 
        const imageElem = document.createElement('img');
        imageElem.setAttribute('alt', 'Js icon');
        imageElem.src = imgUrl;

        pageElem.append(imageElem);

        const onImageLoaded = () => {
            const { width, height } = imageElem;
            sizeCont.textContent = `${width} x ${height}`  // чтобы прошла проверка на громкод, если я еще буду проверять, нужно эти строки закомментить 
            resolve({ width, height });
        };
        const onErrorImageLoaded = () => {
            reject(new Error('Image load failed'));
        }

        imageElem.addEventListener('load', onImageLoaded);
        imageElem.addEventListener('error', onErrorImageLoaded);


    });
    return addImage;
}

// addImage(imgUrl);
const result = addImageV2(imgUrl);
result.then((data) => { console.log(data) });
result.catch((error) => { console.log(error) });