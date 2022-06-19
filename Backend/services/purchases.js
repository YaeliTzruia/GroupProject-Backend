const Purchase = require("../models/Purchase")

const addPurchase = async (NewPurchase) => {
    //   delete password;
    try {
      const newPurchase = new Purchase(NewPurchase);
      const purchase = await newPurchase.save();
      return purchase;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  module.exports = {
      addPurchase
  }