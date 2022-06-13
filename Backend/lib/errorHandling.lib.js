class ErrorHandler {
  constructor(status, msg) {
    this.status = status;
    this.msg = msg;
  }

  static needLogin = () => new ErrorHandler(401, "You need to login");

  static userNotFound = () => new ErrorHandler(404, "User Not Found");

  static userAlreadyExists = () => new ErrorHandler(409, "User Already Exists");

  static LoginFailed = () => new ErrorHandler(403, "Login Failed");

  static tokenExpired = () => new ErrorHandler(403, "Token is Expired");

  static internalError = (msg) =>
    new ErrorHandler(500, `Error: ${msg || "internal error"}`);

  static notAllowed = () =>
    new ErrorHandler(
      405,
      "You do not have permission to access this part of the website"
    );
}

module.exports = ErrorHandler;
