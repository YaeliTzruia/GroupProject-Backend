const ErrorHandler = require("../lib/errorHandling.lib");
const Product = require("../models/Product");

const searchLimit = async (req, res) => {
  try {
    console.log("req params", req.params);
    const { keywords } = req.params;
    const lowerKeywords = keywords.toLowerCase();
    const queryString = lowerKeywords.split("+");
    const string = queryString.toString();
    Product.find({
      keywords: { $regex: { $all: queryString } },
    })
      // { $all: lowerKeywords.split("+") }
      .limit(5)
      .select("name photoURL subcategory")
      .then((output) => res.json(output))
      .catch((error) => console.log(error));
    console.log(string, "string");
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
  const searchKeys = Object.keys(req.query);
  const searchValues = Object.values(req.query);
  console.log("keys", searchKeys, "values", searchValues);
  const searchSubcategory = searchKeys[0];
  const searchValue = searchValues[0];
  var query = {};
  query[searchSubcategory] = searchValue;
  try {
    //const product = await Product.find(query);
    const product = await Product.find(query).sort({createdAt: -1});
    //console.log("products", product);
    if (product.length === 0) res.status(404).send(ErrorHandler.noProducts());
    res.send({ status: "success", products: product });
  } catch (err) {
    console.log(err);
    return err;
  }
};

const keywordSearch = async (req, res) => {
  const keyword = req.body.keyword;
  console.log("keyword", keyword);
  try {
    const product = await Product.find({ keywords: keyword });
    if (product.length === 0) res.status(404).send(ErrorHandler.noProducts());
    res.send({ status: "success", products: product });
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = { searchLimit, searchAll, subcategories, keywordSearch };
