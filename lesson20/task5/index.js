export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
    get id() { // используем геттер только на чтение id пользователей
        return this._id;
    }
    get name() { // используем геттер только на чтение свойства имен пользователей
        return this._name;
    }
    get sessionId() { // используем геттер только на чтение свойства sessionId
        return this._sessionId;
    }
}

export class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users); // запрещаем изменения в массиве пользователей
    }
    get users() { // используем геттер только чтение массива пользователей
        return this._users;
    }

    getUserNames() {
        return this._users.map((a) => a.name); //получаем массив имен пользователей
    }
    getUserIds() {
        return this._users.map((a) => a.id); //получаем массив id пользователей
    }
    getUserNameById(id) {
        for (let i of this._users) { //получаем имя пользователя по id
            if (i.id === id)
                return i.name;
        }
    }

}