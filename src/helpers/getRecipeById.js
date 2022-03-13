import { recipeData } from "../data/recipeDataBase";

export const getRecipeById = (id) => {
    return recipeData.filter(recipe => recipe.id === id)
}