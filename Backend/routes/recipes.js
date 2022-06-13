const express = require("express");
const route = express.Router();
const RecipeController = require("../controllers/recipes");
const validator = require("../DTO/validator");
const recipeSchema = require("../DTO/recipesValidation/recipeSchema");

// route.param("recipeId", RecipeController.findAndSetRecipe);

route.get("/", RecipeController.getAllRecipes);
route.get("/:recipeId", RecipeController.getRecipeById);
route.put("/:recipeId", validator(recipeSchema), RecipeController.updateRecipe);
route.post("/", validator(recipeSchema), RecipeController.addNewRecipe);
route.delete("/:recipeId", RecipeController.deleteRecipe);

module.exports = route;
