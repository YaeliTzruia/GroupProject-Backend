const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    cuisine: { type: String },
    category: { type: String, required: true },
    portions: { type: String, required: true },
    contributer: { type: String },
    ingredients: [{ type: String, required: true }],
    directions: [{ type: String, required: true }],
    allergens: [{ type: String, required: true }],
    keywords: [{ type: String, required: true }],
    photoURL: { type: String },
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
