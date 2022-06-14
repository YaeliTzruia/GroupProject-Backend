const jwt = require("jsonwebtoken");
const secretJwt = process.env.JWT_SECRET;

const sign = (data) => {
  const oneSecond = Math.floor(Date.now() / 1000);
  const expireIn15m = oneSecond + 60 * 15;
  const access_token = jwt.sign({ data, exp: expireIn15m }, secretJwt);
  const refresh_token = jwt.sign(
    { data: { refresh: true }, exp: expireIn15m },
    secretJwt
  );

  return { access_token, refresh_token };
};

const verify = (token) => {
  return new Promise((res, rej) => {
    jwt.verify(token, secretJwt, (err, decoded) => {
      if (err) {
        return rej(err);
      }
      res(decoded.data);
    });
  });
};

module.exports = {
  sign,
  verify,
};
