const purchaseService = require("../services/purchases");

const makeAPurchase = async (req, res) => {
  console.log("req body items", req.body.items);
  try {
    const purchase = {
      customer: req.user._id.toString(),
      paymentMethod: req.body.payment,
      items: [...req.body.items],
    };
    const newPurchaseObj = await purchaseService.addPurchase(purchase);
    res.send({
      status: "success",
      message: `A new purchase has been made!`,
    });
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  makeAPurchase,
};
