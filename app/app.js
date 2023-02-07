"use strict";

// Modules
const express = require("express");
const bodyParser = require("body-parser");

// Environment variables
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// Routing
const home = require("./src/routes/home");

// Setup app
app.set("views", "./src/views");

app.set("view engine", "ejs");

// Set the current path to a static path.
app.use(express.static(`${__dirname}/src/public`));

// Setup bodyparser
app.use(bodyParser.json());

// Resolve the problem of incorrect recognition of characters such as Korean and spaces in data transmitted through the URL.
app.use(bodyParser.urlencoded({ extended: true }));

// use => Method to register a middleware.
app.use("/", home);

module.exports = app;
