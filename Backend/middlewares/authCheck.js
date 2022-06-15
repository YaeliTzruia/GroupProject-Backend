const jwt = require("jsonwebtoken");
const config = require("dotenv").config();
const User = require("../models/User");
const secret = process.env.JWT_SECRET;
const ErrorHandler = require("../lib/errorHandling.lib");

const authCheck = (req, res, next) => {
  console.log(req.cookies.JWT, "JWT");
  if (req.cookies.JWT) {
    return jwt.verify(req.cookies.JWT, secret, async (err, decoded) => {
      try {
        const thisUser = await User.findById(decoded.id);
        if (!thisUser) {
          res.send(ErrorHandler.tokenNotFound());
        }
        req.user = thisUser;
        return next();
      } catch (err) {
        res.send(ErrorHandler.invalidToken());
      }
    });
  }

  res.send(ErrorHandler.needLogin());

  res.send({ status: "Error", message: "No JWT was found" });
  next("No JWT was found");
};

module.exports = authCheck;
