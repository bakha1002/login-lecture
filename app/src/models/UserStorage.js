'use strict'

class UserStorage {
    static #users = {
        id: ['guty', '나개발', '김팀장'],
        psword: ['1234', '1234', '123456'],
        name: ['구티', '나개발', '김팀장']
    };

    static getUsers(...fields) {
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field]
            }
            return newUsers
        }, {})
        return newUsers
    }

    static getUserInfo(id) {
        const users = this.#users
        const idx = users.id.indexOf(id)
        const usersKey = Object.keys(users)
        const userInfo = usersKey.reduce((newUser, info) => {
            newUser[info] = users[info][idx]
            return newUser
        }, {})

        return userInfo
    }
};

module.exports = UserStorage;