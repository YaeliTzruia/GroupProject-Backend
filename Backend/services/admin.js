const User = require("../models/User");
const Purchase = require("../models/Purchase");
const Product = require("../models/Product");

const getAllUsersData = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getAllPurchasesData = async () => {
  try {
    const purchases = await Purchase.find();
    return purchases;
  } catch (err) {
    console.log(err);
    return err;
  }
};
const getTodaysPurchases = async () => {
  try {
    const today = new Date();
    const midnightToday = today.setHours(0, 0, 0, 0);
    const todaysPurchases = await Purchase.find({
      createdAt: { $gt: midnightToday.toString() },
    }).populate({
      path: "items",
      populate: {
        path: "product",
        model: "Product",
      },
    });
    console.log("how many purhcases today", todaysPurchases.length);
    return todaysPurchases;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const delUser = async (id) => {
  console.log(id, "id");
  try {
    const users = await User.findById(id);
    const del = await users.remove(id);
    return del;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  getAllUsersData,
  delUser,
  getAllPurchasesData,
  getTodaysPurchases,
};
