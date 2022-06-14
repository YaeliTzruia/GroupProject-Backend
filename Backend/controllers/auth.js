const usersService = require("../services/users");
const authService = require("../services/auth");
const ErrorHandler = require("../lib/errorHandling.lib");

const User = require("../models/User");

const register = async (req, res, next) => {
  res.clearCookie("JWT");
  const newuser = { ...req.body };
  delete newuser.passwordConfirmation;
  const hashed = authService.generateHash(newuser.password);
  const user = new User({ ...req.body, password: hashed });

  try {
    await user.save();
    delete user.password;

    const token = authService.generateToken(user._id);
    res.cookie("JWT", token, {
      maxAge: 1000 * 60 * 60 * 24 * 365,
      httpOnly: true,
      domain: "localhost",
    });
    res.json(user);
  } catch (err) {
    console.log(err);
    next(ErrorHandler.userAlreadyExists());
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await usersService.findByEmail(email);

  if (!user) {
    return next(ErrorHandler.userNotFound());
  }
  const isValid = authService.validateHash(password, user.password);

  if (isValid) {
    const token = authService.generateToken(user._id);
    res.cookie("JWT", token, cookieSettings);
    res.json({ status: "success", message: "Logged in", token });
  }
  next(ErrorHandler.LoginFailed());
};

module.exports = { register, login };
