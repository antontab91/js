import { addImage } from './addImage.js'

export const addImageV2 = imgSrc => {
    return new Promise((resolve, reject) => {
        addImage(imgSrc, (error, data) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(data);
        });
    });
};