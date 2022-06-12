const Yup = require("yup");

const productSchema = Yup.object({
  name: Yup.string().required("name required"),
  variety: Yup.string().required("variety required"),
  category: Yup.string().required("category required"),
  size: Yup.string().required("size required"),
  brand: Yup.string().required("brand required"),
  price: Yup.string().required("price required"),
  quantity: Yup.number().required("quantity required"),
  allergens: Yup.array()
    .min(1, "enter at least one allergen")
    .required("allergens required"),
  keywords: Yup.array()
    .min(1, "enter at least one keyword")
    .required("keywords required"),
  photoURL: Yup.string(),
});

module.exports = productSchema;
