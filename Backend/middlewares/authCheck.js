const jwt = require("jsonwebtoken");
const config = require("dotenv").config();
const User = require("../models/User");
const secret = process.env.JWT_SECRET;

const authCheck = (req, res, next) => {
  if (req.cookies.JWT) {
    return jwt.verify(req.cookies.JWT, secret, async (err, decoded) => {
      if (err) return next("Invalid JWT");
      const thisUser = await User.findById(decoded.id);
      if (!thisUser) return next("No user exists with this token");
      req.user = thisUser;
      return next();
    });
  }
  next(new AuthError("No JWT was found"));
};

module.exports = authCheck;
