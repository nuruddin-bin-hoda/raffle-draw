// external import
require("dotenv").config();
const http = require("http");

// internal import
const app = require("./app/app");

// create server
const server = http.createServer(app);

// server port
const PORT = process.env.PORT || 8000;

// add listener to the server
server.listen(PORT, () => {
  console.log(`Server live on PORT ${PORT}`);
});
