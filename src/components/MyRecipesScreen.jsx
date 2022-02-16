import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/appContext";
import { useForm } from "../hooks/useForm";
import { CardRecipe } from "./CardRecipe";
import { Filter } from "./Filter";

export const MyRecipesScreen = () => {
  //TO add images
  const addImg = useRef();
  const handleAddImg = (e) => {
    e.preventDefault();
    addImg.current.click();
  };

  //Open close new recipe modal
  const { isActive, closeModal } = useGlobalContext();
  const { openModal } = useGlobalContext();

  //To get data from form
  const [value, handleInputchange, reset] = useForm({
    title: "",
  });

  const { name } = value;

  //To save recipes

  const [recipeList, setRecipeList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipeList(value, ...recipeList);
    console.log(value, recipeList);
    reset();
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
              value={name}
              onChange={handleInputchange}
            />
            <select>
              <option defaultValue>Choose category</option>
              <option value="Meat">Meat</option>
              <option value="Veggies">Veggies</option>
              <option value="fish">Fish</option>
              <option value="pasta">Pasta</option>
            </select>
            <input type="text" placeholder="Ingredients" />
            <textarea type="text" placeholder="Elaboration" />
            <input type="file" className="img-invisible" ref={addImg} />{" "}
            <div className="new-recipe__form__img-container">
              <img
                src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
                alt=""
              />
            </div>
            <div className="new-recipe__form__btns">
              <button className="addImg-btn" onClick={handleAddImg}>
                <i className="far fa-image"></i>Add an Image
              </button>
              <button
                className="saveRecipe-btn"
                type="submit"
                onSubmit={handleSubmit}
              >
                <i className="fas fa-cloud-download-alt"></i>Save Recipe
              </button>
              <button className="cancel-btn" onClick={closeModal}>
                <i className="fa-solid fa-rectangle-xmark"></i>Cancel
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
          <CardRecipe />
          <CardRecipe /> <CardRecipe />
        </div>
      </div>
    </>
  );
};
