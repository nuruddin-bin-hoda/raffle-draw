// external import
const mongoose = require("mongoose");

// ticket schema
const ticketSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      require: true,
      trim: true,
    },
    price: {
      type: Number,
      require: true,
      trim: true,
    },
    username: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// ticket model
const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
