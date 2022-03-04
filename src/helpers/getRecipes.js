export const getRecipes = async (category) => {
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURI(
        category
    )}&number=30&apiKey=0684986a35d049e19c04cc18e918db98`;
    const resp = await fetch(url);
    const data = await resp.json();
    const recipes = data.map((recipe) => {
        return {
            id: recipe.id,
            title: recipe.title,
            img: recipe.image,
        };
    });


    return recipes
};