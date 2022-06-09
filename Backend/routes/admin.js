const express = require("express");
const route = express.Router();
const adminController = require("../controllers/admin");

route.get("/users", adminController.getAllUsers);
route.get("/users/:userId", adminController.getById);
route.delete("/users/:userId", adminController.delUser);

module.exports = route;
