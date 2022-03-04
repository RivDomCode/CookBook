import React, { useState } from "react";
import { useGlobalContext } from "../context/appContext";
import { CardRecipe } from "./CardRecipe";
import { Filter } from "./Filter";
import { NoRecipes } from "./NoRecipes";

export const MyRecipesScreen = ({ category }) => {
  //Open close new recipe modal
  const { isActive, closeModal, openModal } = useGlobalContext();

  //Save recipes
  const [recipeList, setRecipeList] = useState([]);
  //Get Values from new-recipe form
  const initialState = {
    id: "",
    title: "",
    ingredients: "",
    imgUrl: "",
    elaboration: "",
  };
  const [value, setValue] = useState(initialState);

  const { id, title, imgUrl, elaboration, ingredients } = value;

  const handleChange = ({ target }) => {
    setValue({ ...value, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipeList([value, ...recipeList]);
    setValue(initialState);
    closeModal();
  };

  return (
    <>
      <div
        className={`${isActive ? "new-recipe show-new-recipe" : "new-recipe"}`}
      >
        <form className="new-recipe__form" onSubmit={handleSubmit}>
          <div className="new-recipe__form__inputs">
            <h2>New Recipe</h2>
            <input
              type="text"
              placeholder="Recipe Title"
              name="title"
              value={title}
              onChange={handleChange}
            />
            <div className="select">
              <p>Choose a category for your recipe</p>
              <label>Fish</label>
              <input type="radio" name="fish" value="fish" />
              <label>Meat</label>
              <input type="radio" name="meat" value="meat" />
            </div>
            <input
              type="text"
              placeholder="Ingredients"
              name="ingredients"
              value={ingredients}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Image URL"
              name="imgUrl"
              value={imgUrl}
              onChange={handleChange}
            />
            <textarea
              type="text"
              placeholder="Elaboration"
              name="elaboration"
              value={elaboration}
              onChange={handleChange}
            />
            <div className="new-recipe__form__btns">
              <button className="saveRecipe-btn" type="submit">
                <i className="fas fa-cloud-download-alt"></i>Save Recipe
              </button>
              <button className="cancel-btn" type="reset" onClick={closeModal}>
                <i className="fa-solid fa-rectangle-xmark"></i>Cancel{" "}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="my-recipes">
        <Filter />
        <div className="my-recipes__addButton">
          <button className="my-recipes__addButton__btn" onClick={openModal}>
            <i className="fas fa-plus"></i>
            Add new Recipe
          </button>
        </div>
        <div className="my-recipes__recipesLayout">
          {recipeList === [] ? (
            <NoRecipes />
          ) : (
            recipeList.map((recipe) => {
              return <CardRecipe key={category} {...recipe} />;
            })
          )}
        </div>
      </div>
    </>
  );
};
