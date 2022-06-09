const ajv = require("./ajv");

const validator = async (schema) => {
  return (req, res, next) => {
    try {
      const obj = req.body;
      console.log(obj, "obj");

      const validator = ajv.compile(schema);

      const valid = validator(obj);

      if (!valid) {
        return next("validator.errors");
      }
      res("validator passed!");
      next();
    } catch (err) {
      console.log(err);
      return err;
    }
  };
};

module.exports = validator;
