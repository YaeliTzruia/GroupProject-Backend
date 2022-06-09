const express = require("express");
const route = express.Router();
const usersController = require("../controllers/users");
// const validator = require("../DTO/validator");
// const registerUserSchema = require("../DTO/usersInfoValidation/registerUserSchema");

route.get("/me", usersController.getMe);
route.get("/:userId", usersController.getById);
route.post("/", usersController.addNew);
route.put("/:userId", usersController.update);

module.exports = route;

// validator(registerUserSchema),
