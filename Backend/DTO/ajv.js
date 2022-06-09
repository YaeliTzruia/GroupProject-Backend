const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true, $data: true });
const addFormats = require("ajv-formats");

addFormats(ajv);

ajv.addFormat("pass", async (value) => {
  try {
    console.log("pass", value);
    if (value.length < 6) {
      return false;
    }
    return true;
  } catch (err) {
    console.log(err);
    return err;
  }
});
module.exports = ajv;
