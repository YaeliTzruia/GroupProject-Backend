const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUND);

const bcrypt = require("bcrypt");

const hash = (value) => {
  return bcrypt.hashSync(value, saltRounds);
};

const check = (value, hashed) => {
  return bcrypt.compareSync(value, hashed);
};

module.exports = {
  hash,
  check,
};
