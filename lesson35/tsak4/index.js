const userName = '{"type" : "bulbazar"}';
export const parseUser = jsonUser => {
    try {
        const user = JSON.parse(jsonUser);
        return user;
    } catch {
        return null;
    }
};