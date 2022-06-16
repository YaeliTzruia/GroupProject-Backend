const usersService = require("../services/users");

const getMe = async (req, res) => {
  try {
    const me = req.user.toProfileJSON();
    res.send({"status": "success", me});
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getById = async (req, res) => {
  try {
    const user = await usersService.getById(req.params.userId);
    res.send({ status: "success", user: user });
  } catch (err) {
    console.log(err);
    return err;
  }
};

const addNewUser = async (req, res) => {
  try {
    const obj = {
      ...req.body,
    };
    const newUserObj = usersService.add(obj);
    res.send({
      status: "success",
      message: `A new user has been created with this information: ${newUserObj}`,
    });
  } catch (err) {
    console.log(err);
    return err;
  }
};

const logout = (req, res) => {
  res.clearCookie("JWT");
  res.json({ status: "success", message: "Logged out" });
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.userId;
    const item = req.body;
    await usersService.update(id, item);
    res.send({ status: "success", message: "User Updated", "updated info": item });
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  getMe,
  getById,
  addNewUser,
  updateUser,
  logout,
};
