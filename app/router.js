// external import
const router = require("express").Router();

// app route handeler
router.use("/api/v1/tickets", require("../routes/ticketRouter"));

// app health check
router.get("/health", (_req, res) => {
  res.status(200).json({
    messagte: "Success",
  });
});

module.exports = router;
