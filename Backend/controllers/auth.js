const usersService = require("../services/users");
const authService = require("../services/auth");
const ErrorHandler = require("../lib/errorHandling.lib");
const cookieSettings = require("../DTO/auth/cookie");

const User = require("../models/User");

const register = async (req, res, next) => {
  res.clearCookie("JWT");
  const newuser = { ...req.body };
  console.log(newuser, "new user");
  delete newuser.passwordConfirmation;
  const hashed = authService.generateHash(newuser.password);
  const user = new User({ ...req.body, password: hashed });

  try {
    await user.save();
    delete user.password;
    const token = authService.generateToken(user._id);
    res.cookie("JWT", token, cookieSettings);
    res.json({ user, token });
  } catch (err) {
    console.log(err);
    res.send(ErrorHandler.userAlreadyExists());
    next(ErrorHandler.userAlreadyExists());
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await usersService.findByEmail(email);
    const isValid = authService.validateHash(password, user.password);
    if (!isValid) {
      res.send({ status: "Error", message: "Password incorrect" });
    } else if (isValid) {
      const token = authService.generateToken(user._id);
      res.cookie("JWT", token, cookieSettings);
      res.json({ status: "success", message: "Logged in", user, token });
    }
  } catch (err) {
    res.send(ErrorHandler.userNotFound());
  }

  // next(ErrorHandler.LoginFailed());
};

module.exports = { register, login };
