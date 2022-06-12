const express = require("express");
const route = express.Router();
const ProductController = require("../controllers/products");
const validator = require("../DTO/validator");
const productSchema = require("../DTO/productInfoValidation/productSchema");

route.get("/", ProductController.getAllProducts);
route.get("/:productId", ProductController.getProductById);
route.put("/:productId", ProductController.updateProduct);
route.post("/", validator(productSchema), ProductController.addNewProduct);
route.delete("/:productId", ProductController.deleteProduct);
module.exports = route;
