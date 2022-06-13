const express = require("express");
const route = express.Router();

const usersController = require("../controllers/users");
const validator = require("../DTO/validator");
const registerUserSchema = require("../DTO/usersInfoValidation/registerUserSchema");
const updateUserSchema = require("../DTO/usersInfoValidation/updateUserSchema");

route.get("/me", usersController.getMe);
route.get("/:userId", usersController.getById);
route.post("/", validator(registerUserSchema), usersController.addNewUser);
route.put("/:userId", validator(updateUserSchema), usersController.updateUser);

module.exports = route;

// validator(registerUserSchema),
