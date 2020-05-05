const storage = {};

export const setItem = (key, value) => {
    Object.assign(storage, { [key]: value });
};

export const getItem = (key) => {
    return storage[key];
};