const adminService = require("../services/admin");
const usersService = require("../services/users");

const getAllUsers = async (req, res) => {
  try {
    const users = await adminService.getAllUsersData();
    res.json(users);
  } catch (err) {
    console.log(err);
    return err;
  }
};

const delUser = async (req, res) => {
  try {
    const user = await adminService.getById(req.params.userId);
    await usersService.delUser(user._id);
    res.send("User Deleted!");
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  getAllUsers,
  delUser,
};
