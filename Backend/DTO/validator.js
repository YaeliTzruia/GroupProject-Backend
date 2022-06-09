// const ajv = require("./ajv");

const validator = async (schema) => {
  console.log(schema, "schema");
  // return (req, res, next) => {
  //   try {
  //     const obj = req.body;
  //     console.log(obj, "obj");
  //     const validator = ajv.compile(schema);
  //     const valid = validator(obj);
  //     console.log(valid, "valid");
  //     if (!valid) {
  //       return next("validator.errors");
  //     }
  //     res("validator passed!");
  //     next();
  //   } catch (err) {
  //     console.log(err);
  //     return err;
  //   }
  // };
};

module.exports = validator;
