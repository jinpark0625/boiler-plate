"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.id);

      if (user) {
        if (user.id === client.id && user.password === client.password) {
          return { success: true };
        }
        return { success: false, msg: "Invalid password. Please try again." };
      }
      return { success: false, msg: "Id does not exist." };
    } catch (err) {
      return { succes: false, err };
    }
  }

  async register() {
    const client = this.body;

    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      console.log(err);
      return { succes: false, err };
    }
  }
}

module.exports = User;
