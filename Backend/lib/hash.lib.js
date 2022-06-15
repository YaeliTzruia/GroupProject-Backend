const bcrypt = require("bcrypt");
const saltRounds = 10;
// const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUND);

const hash = (value) => {
  return bcrypt.hashSync(value, saltRounds);
};

const check = (value, hashed, res) => {
  return bcrypt.compareSync(value, hashed);
};

module.exports = {
  hash,
  check,
};
