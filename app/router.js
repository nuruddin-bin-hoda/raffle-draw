// external import
const router = require("express").Router();

// internal import

router.get("/health", (_req, res) => {
  res.status(200).json({
    messagte: "Success",
  });
});

module.exports = router;
