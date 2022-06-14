const express = require("express");
const route = express.Router();
const adminController = require("../controllers/admin");
const usersController = require("../controllers/users");
const adminMiddleware = require("../middlewares/adminCheck");
const authCheck = require("../middlewares/authCheck");

route.use(authCheck);

route.get("/users",  adminMiddleware, adminController.getAllUsers);
route.get("/users/:userId", adminMiddleware, usersController.getById);
route.delete("/users/:userId", adminMiddleware, adminController.delUser);

module.exports = route;
