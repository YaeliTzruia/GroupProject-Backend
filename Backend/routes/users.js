const express = require("express");
const route = express.Router();

const usersController = require("../controllers/users");
const validator = require("../DTO/validator");
const registerUserSchema = require("../DTO/usersInfoValidation/registerUserSchema");
const loginUserSchema = require("../DTO/usersInfoValidation/loginUserSchema");
const updateUserSchema = require("../DTO/usersInfoValidation/updateUserSchema");
const authController = require("../controllers/auth");

route.get("/me", usersController.getMe);
route.get("/:userId", usersController.getById);

route.post("/register", validator(registerUserSchema), authController.register);
route.post("/login", validator(loginUserSchema), authController.login);

route.put("/:userId", validator(updateUserSchema), usersController.updateUser);

module.exports = route;

// validator(registerUserSchema),
