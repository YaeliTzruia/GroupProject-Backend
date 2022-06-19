const Yup = require("yup");

const purchaseSchema = Yup.object({
  userId: Yup.string().required("user ID required"),
  items: Yup.string().required("products are required to make a purchase")
});

module.exports = purchaseSchema;
