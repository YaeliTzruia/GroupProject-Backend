const validator = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body);
      res.json("post succeeded");
      next();
    } catch (err) {
      console.log(err);
      res.json(err.message);
      next(err);
    }
  };
};

module.exports = validator;
