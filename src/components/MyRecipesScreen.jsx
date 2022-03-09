import React, { useState } from "react";
import { useGlobalContext } from "../context/appContext";
import { CardRecipe } from "./CardRecipe";
import { Filter } from "./Filter";
import { recipeData } from "../data/recipeDataBase";

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

  //to get value of radio inputs
  const [recipeCategory, setRecipeCategory] = useState("");
  const handleRecipeCategoryChange = (e) => {
    setRecipeCategory(e.target.value);
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
              className="form-inputs"
              placeholder="Recipe Title"
              name="title"
              value={title}
              onChange={handleChange}
            />
            <div className="select">
              <p>Choose a category for your recipe</p>
              <div className="radio-btn">
                <label>Fish</label>
                <input
                  type="radio"
                  value="fish"
                  checked={recipeCategory === "fish"}
                  onChange={handleRecipeCategoryChange}
                  className="radio-inputs"
                />
                <label>Meat</label>
                <input
                  type="radio"
                  value="meat"
                  checked={recipeCategory === "meat"}
                  onChange={handleRecipeCategoryChange}
                  className="radio-inputs"
                />
                <label>Veggie</label>
                <input
                  type="radio"
                  value="veggies"
                  checked={recipeCategory === "veggies"}
                  onChange={handleRecipeCategoryChange}
                  className="radio-inputs"
                />
                <label>Dessert</label>
                <input
                  type="radio"
                  // value="desserts"
                  checked={recipeCategory === "desserts"}
                  onChange={handleRecipeCategoryChange}
                  className="radio-inputs"
                />
              </div>
            </div>
            <input
              type="text"
              className="form-inputs"
              placeholder="Ingredients"
              name="ingredients"
              value={ingredients}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-inputs"
              placeholder="Image URL"
              name="imgUrl"
              value={imgUrl}
              onChange={handleChange}
            />
            <textarea
              type="text"
              className="form-inputs"
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
          {recipeList.map((recipe) => {
            return <CardRecipe key={Math.random()} {...recipe} />;
          })}
          {recipeData.map((data) => {
            return <CardRecipe key={data.id} {...data} />;
          })}
        </div>
      </div>
    </>
  );
};
