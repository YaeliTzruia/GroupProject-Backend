const Product = require("../models/Product");

const searchLimit = async (req, res) => {
  try {
    console.log("req query", req.query);
    const { keywords } = req.query;
    lowerKeywords = keywords.toLowerCase();
    Product.findAll(
      { where: { keywords: { [Op.like]: "%" + term + "%" } } },
      { limit: 5 }
    )
      .then((output) => res.send("search result", { output }))
      .catch((error) => console.log(error));
  } catch (err) {
    console.log(err);
    return err;
  }
};
const searchAll = async (req, res) => {
  try {
    const { keywords } = req.query;
    keywords = keywords.toLowerCase();
    Product.findAll({ where: { keywords: { [Op.like]: "%" + term + "%" } } })
      .then((output) => res.send("search result", { output }))
      .catch((error) => console.log(error));
  } catch (err) {
    coneole.log(err);
    return err;
  }
};

const subcategories = async (req, res) => {
  console.log("req.query", req.query);
  const searchKeys = Object.keys(req.query)
  const searchValues = Object.values(req.query)
  console.log("keys", searchKeys, "values", searchValues)
  const searchSubcategory = searchKeys[0];
  const searchValue = searchValues[0];
  console.log("subcategory", searchSubcategory);
  try {
    const product = await Product.find({searchSubcategory: searchValue });
    res.send({ status: "success", products: product });
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = { searchLimit, searchAll, subcategories };
