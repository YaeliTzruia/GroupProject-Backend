const express = require("express");
const route = express.Router();

const usersController = require("../controllers/users");
const authController = require("../controllers/auth");

const validator = require("../DTO/validator");
const registerUserSchema = require("../DTO/usersInfoValidation/registerUserSchema");
const loginUserSchema = require("../DTO/usersInfoValidation/loginUserSchema");
const updateUserSchema = require("../DTO/usersInfoValidation/updateUserSchema");

const authCheck = require("../middlewares/authCheck");
const userCheck = require("../middlewares/userCheck");

route.get("/me", authCheck, usersController.getMe);
route.get("/logout", usersController.logout);
route.get("/:userId", authCheck, userCheck, usersController.getById);
route.post("/register", validator(registerUserSchema), authController.register);
route.post("/login", validator(loginUserSchema), authController.login);
route.put(
  "/:userId",
  authCheck,
  userCheck,
  validator(updateUserSchema),
  usersController.updateUser
);

module.exports = route;

// validator(registerUserSchema),
