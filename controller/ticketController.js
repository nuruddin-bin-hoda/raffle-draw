// external import
const { default: ShortUniqueId } = require("short-unique-id");

// internal import
const Ticket = require("../models/Ticket");

const uid = new ShortUniqueId({ length: 10, dictionary: "number" });

// get ticket by ID
const getTicketById = async (req, res) => {
  try {
    const ticketId = req.params.ticketId;

    // find ticket
    const ticket = await Ticket.findOne({ number: ticketId }).select(
      "username number price -_id"
    );

    res.status(302).json({
      ticket: ticket,
    });
  } catch (err) {
    res.status(500).json({
      message: "There was a server site problem!",
    });
  }
};

// update ticket (username & price) by ID
const updateTicketById = async (req, res) => {
  try {
    // ticket id
    const ticketId = req.params.ticketId;

    await Ticket.updateOne(
      { number: ticketId },
      {
        username: req.body.username,
        price: req.body.price,
      }
    );

    res.status(200).json({
      message: "Update Successfull",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "There was a server site problem!",
    });
  }
};

// delete ticket by id
const deleteTicketById = async (req, res) => {
  try {
    // ticket id (number)
    const ticketId = req.params.ticketId;

    await Ticket.deleteOne({ number: ticketId });

    res.status(200).json({
      message: "Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "There was a server site problem!",
    });
  }
};

// get ticket by username
const getTicketByUsername = async (req, res) => {
  try {
    const username = req.params.username;

    // find ticket
    const ticket = await Ticket.findOne({ username: username }).select(
      "username number price -_id"
    );

    res.status(302).json({
      ticket: ticket,
    });
  } catch (err) {
    res.status(500).json({
      message: "There was a server site problem!",
    });
  }
};

// update ticket (username & price) by username
const updateTicketByUsername = async (req, res) => {
  try {
    // ticket id
    const username = req.params.username;

    await Ticket.updateMany(
      { username: username },
      {
        username: req.body.username,
        price: req.body.price,
      }
    );

    res.status(200).json({
      message: "Update Successfull",
    });
  } catch (err) {
    res.status(500).json({
      message: "There was a server site problem!",
    });
  }
};

// delete ticket by username
const deleteTicketByUsername = async (req, res) => {
  try {
    // tickets username
    const username = req.params.username;

    await Ticket.deleteMany({ username: username });

    res.status(200).json({
      message: "Deleted All Tickes Was Successfull",
    });
  } catch (err) {
    res.status(500).json({
      message: "There was a server site problem!",
    });
  }
};

// create a ticket
const createTicket = async (req, res) => {
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

// create multiple ticket
const createMultipleTickets = async (req, res) => {
  try {
    //tickets container
    const allTickets = [];

    // ticket payloads
    const ticketPayload = {
      price: req.body.price,
      username: req.body.username,
    };

    // ticket quantity
    const quantity = req.body.quantity;

    for (let i = 0; i < quantity; i++) {
      const newTicket = new Ticket({
        number: uid(),
        ...ticketPayload,
      });
      // save ticket to db
      await newTicket.save();

      allTickets.push({
        number: newTicket.number,
        username: newTicket.username,
        price: newTicket.price,
        createdAt: newTicket.createdAt,
        updatedAt: newTicket.updatedAt,
      });
    }

    res.status(201).json({
      message: `${quantity} Tickets was created successfully.`,
      tickets: allTickets,
    });
  } catch (err) {
    res.status(500).json({
      message: "There was a server site problem!",
    });
  }
};

// get all tickets
const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().select("number username price -_id");
    res.status(302).json({
      tickets,
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
  createMultipleTickets,
  getAllTickets,
  getTicketById,
  getTicketByUsername,
  updateTicketById,
  updateTicketByUsername,
  deleteTicketById,
  deleteTicketByUsername,
};
