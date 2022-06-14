const express = require("express");
const route = express.Router();
const RecipeController = require("../controllers/recipes");
const validator = require("../DTO/validator");
const recipeSchema = require("../DTO/recipesValidation/recipeSchema");
const recipeCheck = require("../middlewares/checkRecipe");

route.get("/", RecipeController.getAllRecipes);
route.get("/:recipeId", recipeCheck, RecipeController.getRecipeById);
route.put(
  "/:recipeId",
  recipeCheck,
  validator(recipeSchema),
  RecipeController.updateRecipe
);
route.post("/", validator(recipeSchema), RecipeController.addNewRecipe);
route.delete("/:recipeId", recipeCheck, RecipeController.deleteRecipe);

module.exports = route;
