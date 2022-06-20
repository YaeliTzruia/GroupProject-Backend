const jwt = require("jsonwebtoken");
const config = require("dotenv").config();
const User = require("../models/User");
const secret = process.env.JWT_SECRET;
const ErrorHandler = require("../lib/errorHandling.lib");

const authCheck = async (req, res, next) => {
  console.log(req.cookies.JWT, "JWT");
  if (req.cookies.JWT) {
    return jwt.verify(req.cookies.JWT, secret, async (err, decoded) => {
      try {
        const thisUser = await User.findById(decoded.id).populate({
          path: "savedCart.product",
          model: "Product",
        });

        if (!thisUser) {
          res.status(404).send(ErrorHandler.tokenNotFound());
        }
        req.user = thisUser;
        return next();
      } catch (err) {
        res.status(404).send(ErrorHandler.invalidToken());
      }
    });
  }

  res.status(401).send(ErrorHandler.needLogin());
};

module.exports = authCheck;
