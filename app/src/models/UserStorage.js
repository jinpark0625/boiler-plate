"use strict";

class UserStorage {
  static #users = {
    id: ["id", "id2", "id3"],
    password: ["1234", "1234", "1234"],
    name: ["hello", "hello2", "hello3"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUser, field) => {
      if (users.hasOwnProperty(field)) {
        newUser[field] = users[field];
      }
      return newUser;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    // => [id, password, name]
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);
    return { success: true };
  }
}

module.exports = UserStorage;
