const Product = require("../models/Product");

const getAllProducts = async () => {
  try {
    const products = await Product.find().sort({createdAt: -1});
    return products;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getProductById = async (id) => {
  try {
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const updateProduct = async (id, item) => {
  try {
    const product = await Product.findByIdAndUpdate(id, item, {new: true});
    return product;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const addProduct = async (NewProduct) => {
  try {
    const newProduct = new Product(NewProduct);
    const product = await newProduct.save();
    return newProduct;
  } catch (err) {
    console.log(err);
    return err;
  }
};
const deleteProduct = async (id) => {
  try {
    const del = await Product.findByIdAndDelete(id);
    return del;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  updateProduct,
  addProduct,
  deleteProduct,
};
