const express = require("express");
const route = express.Router();
const ProductController = require("../controllers/products");

route.get("/", ProductController.getAllProducts);
route.get("/:productId", ProductController.getProductById);
route.put("/:productId", ProductController.updateProduct);
route.post("/", ProductController.addNewProduct);
route.delete("/:productId", ProductController.deleteProduct);
module.exports = route;
