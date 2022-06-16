const adminService = require("../services/admin");
const usersService = require("../services/users");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await adminService.getAllUsersData();
    res.json({ status: "success", allUsers });
  } catch (err) {
    console.log(err);
    return err;
  }
};

const delUser = async (req, res) => {
  try {
    const user = await usersService.getById(req.params.userId);
    await adminService.delUser(user._id);
    res.send({
      status: "success",
      message: `User with id ${user._id} successfully deleted`,
    });
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  getAllUsers,
  delUser,
};
