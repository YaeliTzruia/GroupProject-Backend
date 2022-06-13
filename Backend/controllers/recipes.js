const res = require("express/lib/response");
const ErrorHandler = require("../lib/errorHandling.lib");
const recipesService = require("../services/recipes");

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipesService.getAllRecipes();
    res.json({ status: "success", recipes: recipes });
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getRecipeById = async (req, res, next) => {
  const id = req.params.recipeId;
  try {
    const recipe = await recipesService.getRecipeById(id);
    console.log(recipe, "recipe")
     res.send(recipe);
  } catch (err) {
    console.log(err.reason);
    // return err.reason;
  }
};

const updateRecipe = async (req, res) => {
  try {
    const id = req.params.recipeId;
    const item = req.body;
    await recipesService.updateRecipe(id, item);
    res.send("recipe updated!");
  } catch {}
};

const addNewRecipe = async (req, res) => {
  try {
    const obj = { ...req.body };
    const newRecipeId = recipesService.addRecipe(obj);
    console.log("produce added!");
    res.send(newRecipeId);
  } catch (err) {
    console.log(err);
    return err;
  }
};
const deleteRecipe = async (req, res) => {
  try {
    const recipe = await recipesService.getRecipeIdById(req.params._recipeId);
    await recipesService.deleteRecipe(recipe);
    res.send("Recipe Deleted!");
  } catch (err) {
    console.log(err);
    return err;
  }
};

const findAndSetRecipe = async (req, res, next, recipeId) => {
  const recipe = await recipesService.getRecipeById(recipeId);
  req.recipe = recipe;
  console.log(req.recipe);
  next();
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  addNewRecipe,
  deleteRecipe,
  findAndSetRecipe,
};
