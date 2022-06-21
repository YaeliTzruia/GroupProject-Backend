const ErrorHandler = require("../lib/errorHandling.lib");
const purchaseService = require("../services/purchases");

const makePurchase = async (req, res, next) => {
  console.log("req body items", req.body.items);
  try {
    const purchase = {
      customer: req.user._id.toString(),
      paymentMethod: req.body.paymentMethod,
      items: [...req.body.items],
      total: req.body.total,
    };
    const newPurchaseObj = await purchaseService.addPurchase(purchase);
    console.log("new purchase obj id", newPurchaseObj._id);
    req.purchaseId = newPurchaseObj._id;
    return next();
  } catch (err) {
    res.status(404).send(ErrorHandler.invalidToken());
  }
};

module.exports = makePurchase;
