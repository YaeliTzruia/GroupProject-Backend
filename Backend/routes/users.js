const express = require("express");
const route = express.Router();

const usersController = require("../controllers/users");
const authController = require("../controllers/auth");
// const purchaseController = require("../controllers/purchases");

const validator = require("../DTO/validator");

const registerUserSchema = require("../DTO/usersInfoValidation/registerUserSchema");
const loginUserSchema = require("../DTO/usersInfoValidation/loginUserSchema");
const updateUserSchema = require("../DTO/usersInfoValidation/updateUserSchema");
const purchaseSchema = require("../DTO/purchasesValidation/purchaseSchema");

const authCheck = require("../middlewares/authCheck");
const userCheck = require("../middlewares/userCheck");
const makeAPurchase = require("../middlewares/makePurchase")

route.get("/me", authCheck, usersController.getMe);
route.get("/logout", usersController.logout);
route.get(
  "/:userId/purchases",
  authCheck,
  userCheck,
  usersController.getPurchaseDetailsByUser
);
route.post("/makeapurchase", authCheck, makeAPurchase, usersController.updateUserPurchases);
route.get("/:userId", authCheck, userCheck, usersController.getById);
route.post("/makeapurchase", authCheck, makeAPurchase, usersController.updateUserPurchases);
route.post("/register", validator(registerUserSchema), authController.register);
route.post("/login", validator(loginUserSchema), authController.login);
route.put(
  "/:userId",
  authCheck,
  userCheck,
  validator(updateUserSchema),
  usersController.updateUser
);

module.exports = route;

// validator(registerUserSchema),
