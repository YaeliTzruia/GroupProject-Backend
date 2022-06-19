const Recipe = require("../models/Recipe");
const ErrorHandler = require("../lib/errorHandling.lib");

const recipeCheck = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId);
    console.log("recipe check recipe in try block", recipe);
    if (recipe != null) return next();
    res.status(404).send(ErrorHandler.noRecipe());
  } catch {
    console.log("recipe check recipe in catch block");
    res.status(404).send(ErrorHandler.noRecipe());
  }
};

module.exports = recipeCheck;
