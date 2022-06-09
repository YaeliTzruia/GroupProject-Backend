const User = require("../models/User");

const getAllUsersData = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const findByEmail = async (email) => {
  try {
    const findUser = await User.findOne({ email });
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
  //   delete addUser.password;
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

const del = async (id) => {
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
  findByEmail,
  getById,
  add,
  update,
  del,
};
