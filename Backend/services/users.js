const User = require("../models/User");

const findByEmail = async (email) => {
  try {
    // const findUser = await User.findOne({ email: email }).populate({
    //   path: "savedCart.product",
    //   model: "Product",
    // }, purchases);
    const findUser = await User.findOne({ email: email })
      .populate("purchases")
      .populate({
        path: "purchases",
        populate: {
          path: "items",
          populate: {
            path: "product",
            model: "Product",
          },
        },
      })
      .populate({
        path: "savedCart.product",
        model: "Product",
      });
    console.log(findUser);

    if (!findUser) return "Email not found";
    return findUser;
  } catch (err) {
    return err;
  }
};

const getById = async (id) => {
  try {
    const user = await User.findById(id).populate("savedCart purchases");
    return user;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const add = async (NewUser) => {
  //   delete password;
  try {
    const newUser = new User(NewUser);
    const user = await newUser.save();
    return user;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const update = async (id, item) => {
  try {
    const users = await User.findByIdAndUpdate(id, item, { new: true });
    await users.save();
    return users;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const updatePurchases = async (userId, purchaseId) => {
  try {
    const users = await User.findByIdAndUpdate(userId, {
      $addToSet: { purchases: purchaseId },
    });
    await users.save();
    return users;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  findByEmail,
  getById,
  add,
  update,
  updatePurchases,
};
