const User = require("../models/User");

const findByEmail = async (email) => {
  try {
    const findUser = await User.findOne({ email }).populate("savedCart");
    if (!findUser) return "Email not found";
    return findUser;
  } catch (err) {
    return err;
  }
};

const getById = async (id) => {
  try {
    const user = await User.findById(id);
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
    const users = await User.findByIdAndUpdate(id, item);
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
};
