const ErrorHandler = require("../lib/errorHandling.lib");
const permissions = require("../lib/permissions.lib");

const adminMiddleware = (req, res, next) => {
  const user = req.user;
  console.log("this is the user who THINKS she is an admin", user);
  const scopes = permissions.get(user.accessLevel);
  console.log(scopes, user.accessLevel, "prem.scop");
  if (scopes.ADMIN) {
    return next();
  }
  res.status(405).send(ErrorHandler.notAllowed());
};

module.exports = adminMiddleware;
