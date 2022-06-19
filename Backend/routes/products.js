const express = require("express");
const route = express.Router();
const ProductController = require("../controllers/products");
const validator = require("../DTO/validator");
const productSchema = require("../DTO/productInfoValidation/productSchema");
const checkProduct = require("../middlewares/checkProduct");
const adminCheck = require("../middlewares/adminCheck");
const SearchController = require("../controllers/search");

route.get("/", ProductController.getAllProducts);
route.get("/search/limit", SearchController.searchLimit);
route.get("/search/allData", SearchController.searchAll);
route.get("/search/:subcategory", SearchController.subcategories);
route.get("/:productId", checkProduct, ProductController.getProductById);
route.put("/:productId", checkProduct, ProductController.updateProduct);
route.use(adminCheck);
route.post("/", validator(productSchema), ProductController.addNewProduct);
route.delete("/:productId", checkProduct, ProductController.deleteProduct);

module.exports = route;
