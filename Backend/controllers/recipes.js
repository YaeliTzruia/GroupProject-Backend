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
    res.send({status: "success", recipe: recipe});
  } catch (err) {
    console.log(err);
    return err;
  }
};

const updateRecipe = async (req, res, next) => {
  try {
    const id = req.params.recipeId;
    const item = req.body;
    console.log("item", item);
    await recipesService.updateRecipe(id, item);
    res.send({"status": "success" ,"message": `recipe with id ${id} updated!`, "new_recipe": item});
  } catch (err) {
    return err;
  }
};

const addNewRecipe = async (req, res) => {
  try {
    const obj = { ...req.body };
    const newRecipe = await recipesService.addRecipe(obj);
    res.json({"status": "success", "_id of new recipe": newRecipe._id, newRecipe});
  } catch (err) {
    console.log(err);
    return err;
  }
};
const deleteRecipe = async (req, res) => {
  try {
    const recipe = await recipesService.getRecipeById(req.params.recipeId);
    await recipesService.deleteRecipe(recipe);
    res.send({"status": "success", "msg": `Recipe with id ${req.params.recipeId} deleted!`});
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
