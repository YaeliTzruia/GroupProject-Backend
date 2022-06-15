const express = require("express");
const route = express.Router();
const adminController = require("../controllers/admin");
const usersController = require("../controllers/users");
const adminCheck = require("../middlewares/adminCheck");
const authCheck = require("../middlewares/authCheck");

route.use(authCheck);
route.use(adminCheck);

route.get("/users", adminController.getAllUsers);
route.get("/users/:userId", usersController.getById);
route.delete("/users/:userId", adminController.delUser);

module.exports = route;
