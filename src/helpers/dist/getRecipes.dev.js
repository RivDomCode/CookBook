"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRecipes = void 0;

var getRecipes = function getRecipes(category) {
  var url, resp, data, meals, recipes;
  return regeneratorRuntime.async(function getRecipes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(encodeURI(category));
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(url));

        case 3:
          resp = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(resp.json());

        case 6:
          data = _context.sent;
          meals = data.meals;
          recipes = meals.map(function (meal) {
            return {
              id: meal.idMeal,
              title: meal.strMeal,
              img: meal.strMealThumb,
              ingredients: [meal.strIngredient1, meal.strIngredient2, meal.strIngredient3, meal.strIngredient4, meal.strIngredient4, meal.strIngredient5, meal.strIngredient6, meal.strIngredient7, meal.strIngredient8, meal.strIngredient9, meal.strIngredient10, meal.strIngredient11, meal.strIngredient12],
              elaboration: meal.strInstructions
            };
          });
          return _context.abrupt("return", recipes);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getRecipes = getRecipes;