// external import
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// middlewares
const middleware = [express.json(), cors(), morgan("dev")];

module.exports = middleware;
