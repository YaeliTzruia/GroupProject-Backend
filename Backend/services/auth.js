const hashLib = require("../lib/hash.lib");
//const jwtLib = require("../lib/jwt.lib");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.JWT_SECRET;

const generateHash = (password) => {
  const hash = hashLib.hash(password);
  return hash;
};

const validateHash = (hashedPassword, password) => {
  const hash = hashLib.check(hashedPassword, password);
  return hash;
};

const generateToken = (userId) => {
  const expireInOneYear = Date.now() + 1000 * 60 * 60 * 24 * 365;
  const token = jwt.sign(
    {
      id: userId,
      exp: expireInOneYear,
    },
    SECRET
  );
  console.log("generate token:", token);
  return token;

  // const data = {
  //   userId,
  // };
  // const tokens = jwtLib.sign(data);
  // return { tokens };
};

module.exports = { generateHash, validateHash, generateToken };
