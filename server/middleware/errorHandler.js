function errorHandler(err, req, res, next) {
  let status = 500;
  let message = `Internal Server Error`;

  console.log(err.name);
  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    status = 400;
    message = err.errors[0].message;
  }

  if (err.name === "EmptyEmail") {
    status = 400;
    message = `Email is required`;
  }

  if (err.name === "EmptyPassword") {
    status = 400;
    message = `Password is required`;
  }

  if (err.name === "InvalidLogin") {
    status = 401;
    message = `Invalid email/password`;
  }

  if (err.name === "InvalidToken") {
    status = 401;
    message = "Invalid token";
  }

  if (err.name === "DataNotFound") {
    status = 404;
    message = "Data not found";
  }

  if (err.name === "NotAuthorized") {
    status = 403;
    message = "You are not authorized";
  }

  res.status(status).json({ message });
}

module.exports = errorHandler;
