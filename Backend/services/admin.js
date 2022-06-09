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

const delUser = async (id) => {
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
};
