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

const getAllPurchases = async (req, res) => {
  try {
    const allPurchases = await adminService.getAllPurchasesData();
    res.json({ status: "success", allPurchases });
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getDailyPurchases = async (req, res) => {
  try {
    const todaysPurchases = await adminService.getTodaysPurchases();
    res.json({ status: "success", todaysPurchases });
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
  getAllPurchases,
  getDailyPurchases,
};
