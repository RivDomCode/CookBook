export const getRecipes = async (category) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURI(category)
        }`;
    const resp = await fetch(url);
    const data = await resp.json();
    const { meals } = data;
    const recipes = meals.map((meal) => {

        return {
            id: meal.idMeal,
            title: meal.strMeal,
            img: meal.strMealThumb,
            ingredients: [meal.strIngredient1, meal.strIngredient2, meal.strIngredient3, meal.strIngredient4, meal.strIngredient4, meal.strIngredient5, meal.strIngredient6, meal.strIngredient7, meal.strIngredient8, meal.strIngredient9, meal.strIngredient10, meal.strIngredient11, meal.strIngredient12],
            elaboration: meal.strInstructions
        };
    });
    return recipes
};