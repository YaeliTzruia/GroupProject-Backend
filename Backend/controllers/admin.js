const adminService = require("../services/admin");

const getAllUsers = async (req, res) => {
  try {
    const users = await adminService.getAllUsersData();
    res.json(users);
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getById = async (req, res) => {
  try {
    const user = await adminService.getById(req.params.userId);
    res.send(user);
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
  getById,
  delUser,
};
