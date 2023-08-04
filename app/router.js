// external import
const router = require("express").Router();

// app health check
router.get("/health", (_req, res) => {
  res.status(200).json({
    messagte: "Success",
  });
});

module.exports = router;
