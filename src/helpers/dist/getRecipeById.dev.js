"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRecipeById = void 0;

var _recipeDataBase = require("../data/recipeDataBase");

var getRecipeById = function getRecipeById(id) {
  return _recipeDataBase.recipeData.filter(function (recipe) {
    return recipe.id === id;
  });
};

exports.getRecipeById = getRecipeById;