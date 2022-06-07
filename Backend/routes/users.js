const express = require("express");
const route = express.Router();
const usersController = require("../controllers/users");

// route.get("/", usersController.getUsers);
// route.get("/me", usersController.getMe);
// route.get("/admin", usersController.getAdminData);
// route.get("/:userId", usersController.getById);

// route.post("/", usersController.addNew);
// route.put("/:userId", usersController.update);
// route.delete("/:userId", usersController.del);

module.exports = route;
