"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRecipes = void 0;

var getRecipes = function getRecipes(category) {
  var url, resp, data, recipes;
  return regeneratorRuntime.async(function getRecipes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=".concat(encodeURI(category), "&number=30&apiKey=0684986a35d049e19c04cc18e918db98");
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(url));

        case 3:
          resp = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(resp.json());

        case 6:
          data = _context.sent;
          recipes = data.map(function (recipe) {
            return {
              id: recipe.id,
              title: recipe.title,
              img: recipe.image
            };
          });
          return _context.abrupt("return", recipes);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getRecipes = getRecipes;