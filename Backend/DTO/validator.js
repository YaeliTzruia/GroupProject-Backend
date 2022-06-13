const validator = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body);
      res.json({"status" : "success", "message": "post succeeded"});
      next();
    } catch (err) {
      console.log(err);
      res.json({"status": "error", "message" : err.message});
      next(err);
    }
  };
};

module.exports = validator;
