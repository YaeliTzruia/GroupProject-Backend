const usersService = require("../services/users");

const getMe = async (req, res) => {
  try {
    const me = await usersService.getById(req.user.userId);
    res.send(me);
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getById = async (req, res) => {
  try {
    const user = await usersService.getById(req.params.userId);
    res.send(user);
  } catch (err) {
    console.log(err);
    return err;
  }
};

const addNew = async (req, res) => {
  try {
    const obj = {
      ...req.body,
    };
    const newId = usersService.add(obj);
    console.log("user Added!");
    res.send(newId);
  } catch (err) {
    console.log(err);
    return err;
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.userId;
    const item = req.body;
    await usersService.update(id, item);
    res.send("User Updated");
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  getMe,
  getById,
  addNew,
  update,
};
