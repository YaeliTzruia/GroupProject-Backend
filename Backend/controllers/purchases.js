const purchaseService = require("../services/purchases");
const userService = require("../services/users");
const userController = require("../controllers/users")

const makeAPurchase = async (req, res) => {
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
    const updateUserWithNewPurchase = await userController.updateUserPurchases({
      purchases: [...req.user.purchases, newPurchaseObj._id],
    });
    console.log("new updated info", updateUserWithNewPurchase);
    res.send({
      status: "success",
      message: `A new purchase has been made!`,
    });
  } catch (err) {
    console.log(err);
    return err;
  }
};

const updateUserPurchases = async (req, res) => {
  try {
    const updateUserWithNewPurchase = await userController.updateUserPurchases();
    console.log("new updated info", updateUserWithNewPurchase);
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
  updateUserPurchases
};
