const cookie = {
  maxAge: 1000 * 60 * 60 * 24 * 365,
  httpOnly: true,
  secure: false,
  domain: "localhost",
};

module.exports = cookie;
