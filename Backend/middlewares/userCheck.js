const User = require("../models/User");
const ErrorHandler = require("../lib/errorHandling.lib");

const userCheck = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    if (user != null) return next();
    res.status(404).send(ErrorHandler.noUser());
  } catch {
    res.status(404).send(ErrorHandler.noUser());
  }
};

module.exports = userCheck;
