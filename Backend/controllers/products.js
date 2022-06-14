const res = require("express/lib/response");
const produceService = require("../services/products");

const getAllProducts = async (req, res) => {
  try {
    const produces = await produceService.getAllProducts();
    res.json({ status: "success", products: produces });
  } catch (err) {
    coneole.log(err);
    return err;
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await produceService.getProductById(req.params.productId);
    res.send({ status: "success", product });
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
    res.send({
      status: "success",
      message: `product with id ${id} updated!`,
      new_product: item,
    });
  } catch (err) {
    return err;
  }
};
const addNewProduct = async (req, res) => {
  try {
    const obj = { ...req.body };
    const newProduct = await produceService.addProduct(obj);
    res.send({"status": "success", "_id of new product": newProduct._id, newProduct});
  } catch (err) {
    console.log(err);
    return err;
  }
};
const deleteProduct = async (req, res) => {
  try {
    const product = await produceService.getProductById(req.params.productId);
    await produceService.deleteProduct(product);
    res.send({"status": "success", "msg": `Product with id ${req.params.productId} deleted!`});
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
