"use strict";

// database에 접근하기위해 file system을 호출한다.
const fs = require("fs").promises;

class UserStorage {
  // 프라이빗한 변수나 매소드는 항상 최상단에
  // convention 이다.
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((newUser, field) => {
      if (users.hasOwnProperty(field)) {
        newUser[field] = users[field];
      }
      return newUser;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    // data 가 buffer data 16진수로 넘어오게된다.
    // Json.parse()를 통해 우리의 언어로 변경한다.
    // ./ 현재의 경로는 app.js의 경로다.
    // readfile을 promise로 해야 return이 가능하다.
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
  }

  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);
    return { success: true };
  }
}

module.exports = UserStorage;
