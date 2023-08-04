// external import
const mongoose = require("mongoose");

// connect to database
async function dbConnection() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("Database connected successfully!");
  } catch (err) {
    console.log(`Can't connect to DB`);
  }
}

module.exports = dbConnection;
