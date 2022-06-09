const res = require("express/lib/response");
const produceService = require("../services/products");

const getAllProducts = async (req, res) => {
  try {
    const produces = await produceService.getAllProducts();
    res.json(produces);
  } catch (err) {
    coneole.log(err);
    return err;
  }
};

const getProductById = async (req, res) => {
  try {
    const produce = await produceService.getProductById(req.params.productId);
    res.send(produce);
  } catch (err) {
    console.log(err);
    return err;
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.productId;
    const item = req.body;
    await produceService.updateProduct(id, item);
    res.send("produce updated!");
  } catch {}
};
const addNewProduct = async (req, res) => {
  try {
    const obj = { ...req.body };
    const newproductId = produceService.addProduct(obj);
    console.log("produce added!");
    res.send(newproductId);
  } catch (err) {
    console.log(err);
    return err;
  }
};
const deleteProduct = async (req, res) => {
  try {
    const product = await produceService.getProductById(req.params.productId);
    await produceService.deleteProduct(product);
    res.send("Product Deleted!");
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  updateProduct,
  addNewProduct,
  deleteProduct,
};
