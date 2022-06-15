const ErrorHandler = require("../lib/errorHandling.lib");
const permissions = require("../lib/permissions.lib");

const adminMiddleware = (req, res, next) => {
  const user = req.user;
  console.log(user, "this is the new user");
  const scopes = permissions.get(user.accessLevel);
  console.log(scopes, user.accessLevel, "prem.scop");
  if (scopes.ADMIN) {
    return next();
  }
  return next(ErrorHandler.notAllowed());
};

module.exports = adminMiddleware;
