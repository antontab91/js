export const parseUser = userData => {
    try {
        return JSON.parse(userData);
    } catch {
        return null;
    }
};