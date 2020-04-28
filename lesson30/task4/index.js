const imgUrl = 'https://media.proglib.io/wp-uploads/2017/12/mxresdefault.jpg';

export const addImag = (imgUrl) => {
    const p = new Promise((resolve, reject) => {
        const pageElem = document.querySelector('.page');
        const sizeCont = document.querySelector('.image-size');
        const imageElem = document.createElement('img');
        imageElem.setAttribute('alt', 'Js icon');
        imageElem.src = imgUrl;

        pageElem.append(imageElem);

        const onImageLoaded = () => {
            const { width, height } = imageElem;
            resolve({ width, height })
            sizeCont.textContent = `${width} x ${height}`
        };
        const onErrorImageLoaded = () => {
            reject('Image load failed');
        }

        imageElem.addEventListener('load', onImageLoaded);
        imageElem.addEventListener('error', onErrorImageLoaded);


    });
    return p;
}

addImag(imgUrl)