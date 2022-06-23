const Product = require("../models/Product");

const searchLimit = async (req, res) => {
  try {
    console.log("req params", req.params);
    const { keywords } = req.params;
    const lowerKeywords = keywords.toLowerCase();
    const queryString = lowerKeywords.split("+");
    const string = queryString.toString();
    Product.find({
      keywords: { $regex: string },
    })
      // with regex we can get the items that contains the typed letters, don't need to be an exact match. with $all you can search for multiple items but has to be the exact word, else it returns you nothing.

      // { $all: lowerKeywords.split("+") }
      .limit(5)
      .select(
        "name photoURL subcategory variety category size brand price allergens keywords"
      )
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
    const product = await Product.find(query);
    console.log("products", product);
    if (product.length === 0)
      res
        .status(404)
        .send({ status: "error", msg: "no products match this query" });
    res.send({ status: "success", products: product });
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = { searchLimit, searchAll, subcategories };
