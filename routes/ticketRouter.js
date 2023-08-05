// internal imports
const {
  createTicket,
  createMultipleTickets,
  getAllTickets,
  getTicketById,
  getTicketByUsername,
  updateTicketById,
  updateTicketByUsername,
  deleteTicketById,
  deleteTicketByUsername,
  raffleDraw,
} = require("../controller/ticketController");

// route handeler
const router = require("express").Router();

// by ID routes handeler
router
  .route("/t/:ticketId")
  .get(getTicketById)
  .patch(updateTicketById)
  .delete(deleteTicketById);

//by username routes handeler
router
  .route("/u/:username")
  .get(getTicketByUsername)
  .patch(updateTicketByUsername)
  .delete(deleteTicketByUsername);

// create a ticket
router.post("/sell", createTicket);

// create multiple tickets
router.post("/bulk", createMultipleTickets);

// raffle draw
router.get("/draw", raffleDraw);

// get all tickets
router.get("/", getAllTickets);

module.exports = router;
