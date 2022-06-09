const usersService = require("../services/users");

const getUsers = async (req, res) => {
  try {
    const users = await usersService.getAllUsersData();
    res.json(users);
  } catch (err) {
    console.log(err);
    return err;
  }
};

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
    res.send(newId);
    res.send("new user added");
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

const del = async (req, res) => {
  try {
    const user = await usersService.getById(req.params.userId);
    await usersService.del(user._id);
    res.send("User Deleted!");
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  getUsers,
  getMe,
  getById,
  addNew,
  update,
  del,
};
