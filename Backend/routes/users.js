const express = require("express");
const route = express.Router();
const usersController = require("../controllers/users");
const validator = require("../DTO/validator");
const registerUserSchema = require("../DTO/usersInfoValidation/registerUserSchema");

route.get("/me", usersController.getMe);
route.get("/:userId", usersController.getById);
route.post("/", validator(registerUserSchema), usersController.addNewUser);
route.put("/:userId", usersController.updateUser);

module.exports = route;

// validator(registerUserSchema),
