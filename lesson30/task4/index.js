const imgUrl = 'https://media.proglib.io/wp-uploads/2017/12/mxresdefault.jpg';

export const addImage = (imgUrl) => {
    const p = new Promise((resolve, reject) => {
        const pageElem = document.querySelector('.page');
        // const sizeCont = document.querySelector('.image-size');
        const imageElem = document.createElement('img');
        imageElem.setAttribute('alt', 'Js icon');
        imageElem.src = imgUrl;

        pageElem.append(imageElem);

        const onImageLoaded = () => {
            const { width, height } = imageElem;
            // sizeCont.textContent = `${width} x ${height}`
            resolve({ width, height });
        };
        const onErrorImageLoaded = () => {
            reject(new Error('Image load failed'));
        }

        imageElem.addEventListener('load', onImageLoaded);
        imageElem.addEventListener('error', onErrorImageLoaded);


    });
    return p;
}

// addImage(imgUrl);
const result = addImage(imgUrl);
result.then((data) => { console.log(data) });
result.catch((error) => { console.log(error) });