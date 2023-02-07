"use strict";

const User = require("../../models/User");
const logger = require("../../config/logger");

// get method
const output = {
  home: (req, res) => {
    logger.info(`GET / 200 "Go to index page"`);
    res.render("home/index");
  },
  login: (req, res) => {
    logger.info(`GET /login 200 "Go to login page"`);
    res.render("home/login");
  },
  register: (req, res) => {
    logger.info(`GET /register 200 "Go to register page"`);
    res.render("home/register");
  },
};

// post method
const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    if (response.err) {
      return logger.error(
        `POST /login 200 Response: "success: ${response.succes}, msg: ${response.err}"`
      );
    } else
      logger.info(
        `POST /login 200 Response: "success: ${response.succes}, msg: ${response.msg}"`
      );
    return res.json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    if (response.err) {
      return logger.error(
        `POST /register 200 Response: "success: ${response.succes}, msg: ${response.err}"`
      );
    } else
      logger.info(
        `POST /register 200 Response: "success: ${response.succes}, msg: ${response.msg}"`
      );

    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
