const express = require("express");
const route = express.Router();
const ProductController = require("../controllers/products");
const validator = require("../DTO/validator");
const productSchema = require("../DTO/productInfoValidation/productSchema");
const checkProduct = require("../middlewares/checkProduct");

route.get("/", ProductController.getAllProducts);
route.get("/:productId", checkProduct, ProductController.getProductById);
route.put("/:productId", checkProduct, ProductController.updateProduct);
route.post("/", validator(productSchema), ProductController.addNewProduct);
route.delete("/:productId", checkProduct, ProductController.deleteProduct);
module.exports = route;
