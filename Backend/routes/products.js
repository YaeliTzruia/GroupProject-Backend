const express = require("express");
const route = express.Router();

const validator = require("../DTO/validator");
const productSchema = require("../DTO/productInfoValidation/productSchema");

const SearchController = require("../controllers/search");
const ProductController = require("../controllers/products");

const checkProduct = require("../middlewares/checkProduct");
const adminCheck = require("../middlewares/adminCheck");
const authCheck = require("../middlewares/authCheck")

route.get("/", ProductController.getAllProducts);
route.get("/search/limit", SearchController.searchLimit);
route.get("/search/allData", SearchController.searchAll);
route.get("/search/:subcategory", SearchController.subcategories);
route.get("/:productId", checkProduct, ProductController.getProductById);
route.put("/:productId", authCheck, adminCheck, checkProduct, ProductController.updateProduct);
route.post("/", authCheck, adminCheck, validator(productSchema), ProductController.addNewProduct);
route.delete("/:productId", authCheck, adminCheck, checkProduct, ProductController.deleteProduct);

module.exports = route;
