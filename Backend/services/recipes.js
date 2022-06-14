const ErrorHandler = require("../lib/errorHandling.lib");
const Recipe = require("../models/Recipe");

const getAllRecipes = async () => {
  try {
    const recipes = await Recipe.find();
    return recipes;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getRecipeById = async (id) => {
  try {
    const recipe = await Recipe.findById(id);
    return recipe;
  } catch (err) {
    console.log("err", err);
    return ErrorHandler.noRecipe();
  }
};

const updateRecipe = async (id, item) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(id, item);
    return recipe;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const addRecipe = async (NewRecipe) => {
  try {
    const newRecipe = new Recipe(NewRecipe);
    const recipe = await newRecipe.save();
    return newRecipe;
  } catch (err) {
    console.log(err);
    return err;
  }
};
const deleteRecipe = async (id) => {
  try {
    const del = await Recipe.findByIdAndDelete(id);
    return del;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  addRecipe,
  deleteRecipe,
};
