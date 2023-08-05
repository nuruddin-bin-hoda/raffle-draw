// external import
const { default: ShortUniqueId } = require("short-unique-id");

// internal import
const Ticket = require("../models/Ticket");

const uid = new ShortUniqueId({ length: 10, dictionary: "number" });

// create a ticket
const createTicket = async (req, res, next) => {
  try {
    const ticketPayload = {
      number: uid(),
      price: req.body.price,
      username: req.body.username,
    };

    const newTicket = new Ticket({
      ...ticketPayload,
    });

    await newTicket.save();

    res.status(201).json({
      message: "Ticket was created successfully.",
      ticket: {
        number: newTicket.number,
        username: newTicket.username,
        price: newTicket.price,
        createdAt: newTicket.createdAt,
        updatedAt: newTicket.updatedAt,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "There was a server site problem!",
    });
  }
};

// export controllers
module.exports = {
  createTicket,
};
