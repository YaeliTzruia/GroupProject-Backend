const validator = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body);
      next();
    } catch (err) {
      console.log(err);
      res.json({ status: "error", message: err.message });
    }
  };
};

module.exports = validator;
