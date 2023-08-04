// external import
const mongoose = require("mongoose");

// ticket schema
const ticketSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
    },
    price: {
      type: Number,
    },
    username: {
      type: String,
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
