const express = require("express");
const route = express.Router();
const adminController = require("../controllers/admin");
const usersController = require("../controllers/users");
const adminCheck = require("../middlewares/adminCheck");
const authCheck = require("../middlewares/authCheck");
const userCheck = require("../middlewares/userCheck")

route.use(authCheck);
route.use(adminCheck);

route.get("/allpurchases", adminController.getAllPurchases);
route.get("/dailypurchases", adminController.getDailyPurchases);
route.get("/users", adminController.getAllUsers);
route.get("/users/:userId", userCheck, usersController.getById);
route.delete("/users/:userId", userCheck, adminController.delUser);

module.exports = route;
