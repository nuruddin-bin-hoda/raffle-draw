// internal imports
const { createTicket } = require("../controller/ticketController");

// route handeler
const router = require("express").Router();

// by ID routes handeler
// router.route("/t/:ticketId").get().patch().delete();

//by username routes handeler
// router.route("/t/:username").get().patch().delete();

// create a ticket
router.post("/sell", createTicket);

// create multiple tickets
// router.post("/bulk");

// raffle draw
// router.get("/draw");

// get all tickets
// get("/");

module.exports = router;
