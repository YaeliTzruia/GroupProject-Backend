class ErrorHandler {
  constructor(status, msg) {
    this.status = status;
    this.msg = msg;
  }

  static needLogin = () => new ErrorHandler(401, "No token was found. You need to login.");

  static tokenNotFound = () =>
    new ErrorHandler(404, "No user exists with this token");
  static invalidToken = () =>
    new ErrorHandler(404, "The token you have provided is invalid");

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

  static noRecipe = () =>
    new ErrorHandler(404, "No recipe matching this id found");

  static noProduct = () =>
    new ErrorHandler(404, "No product matching this id found");
}

module.exports = ErrorHandler;
