const Product = require("../models/Product");
const ErrorHandler = require("../lib/errorHandling.lib");

const productCheck = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (product != null) return next();
    res.send(ErrorHandler.noProduct());
  } catch {
    res.send(ErrorHandler.noProduct());
  }
};

module.exports = productCheck;
