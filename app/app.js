// external import
const express = require("express");

// internal import
const middlewares = require("./middleware");
const router = require("./router");
const { notFoundHandeler, errorHandeler } = require("./error");

// main router
const app = express();

// use middleware
app.use(middlewares);
app.use(router);

// error handeler
app.use(notFoundHandeler); // 404
app.use(errorHandeler); // 500

// export app
module.exports = app;
