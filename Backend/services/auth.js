const hashLib = require("../lib/hash.lib");
const jwtLib = require("../lib/jwt.lib");

const generateHash = (password) => {
  const hash = hashLib.hash(password);
  return hash;
};

const validateHash = (hashedPassword, password) => {
  const hash = hashLib.check(password, hashedPassword);
  return hash;
};

const generateToken = (userId) => {
  const data = {
    userId,
  };
  const tokens = jwtLib.sign(data);
  return { tokens };
};

module.exports = { generateHash, validateHash, generateToken };
