const Product = require("../models/Product");

const searchLimit = async (req, res) => {
  try {
    const { keywords } = req.query;
    keywords = keywords.toLowerCase();
    Product.findAll(
      { where: { keywords: { [Op.like]: "%" + term + "%" } } },
      { limit: 5 }
    )
      .then((output) => res.send("search result", { output }))
      .catch((error) => console.log(error));
  } catch (err) {
    coneole.log(err);
    return err;
  }
};

module.exports = { searchLimit };
