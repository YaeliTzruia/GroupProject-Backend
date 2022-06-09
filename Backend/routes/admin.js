const express = require("express");
const route = express.Router();
const adminController = require("../controllers/admin");
const usersController = require("../controllers/users");

route.get("/users", adminController.getAllUsers);
route.get("/users/:userId", usersController.getById);
route.delete("/users/:userId", adminController.delUser);

module.exports = route;
