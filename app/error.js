// external import

// internal import

// 404 handeler
const notFoundHandeler = (_req, _res, next) => {
  // create an error
  const error = new Error("Resource Not Found!");
  error.status = 404;

  next(error);
};

// error handeler
const errorHandeler = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({
      message: err.message,
    });
  } else {
    res.status(500).json({
      message: "There was a server site problem!",
    });
  }
};

module.exports = {
  notFoundHandeler,
  errorHandeler,
};
