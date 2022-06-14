const Yup = require("yup");

const recipeSchema = Yup.object({
  name: Yup.string().required("name required"),
  cuisine: Yup.string(),
  category: Yup.string().required("category required"),
  portions: Yup.string().required("portions required"),
  contributer: Yup.string(),
  ingredients: Yup.array()
    .min(1, "enter at least one ingredient")
    .required("ingredients required"),
  directions: Yup.array()
    .min(1, "enter at least one direction")
    .required("directions required"),
  allergens: Yup.array()
    .min(1, "enter at least one allergen")
    .required("allergens required"),
  keywords: Yup.array()
    .min(1, "enter at least one keyword")
    .required("keywords required"),
  photoURL: Yup.string(),
});

module.exports = recipeSchema;
