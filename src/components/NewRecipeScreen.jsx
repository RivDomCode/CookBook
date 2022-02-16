import React, { useRef } from "react";
import { useGlobalContext } from "../context/appContext";

export const NewRecipeScreen = () => {
  const addImg = useRef();

  const handleAddImg = (e) => {
    e.preventDefault();
    addImg.current.click();
  };

  const { isActive, closeModal } = useGlobalContext();

  return (
    <div
      className={`${isActive ? "new-recipe show-new-recipe" : "new-recipe"}`}
    >
      <form className="new-recipe__form">
        <div className="new-recipe__form__inputs">
          <h2>New Recipe</h2>
          <input type="text" placeholder="Recipe Title" />
          <select>
            <option selected disabled>
              Choose category
            </option>
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
            <button className="saveRecipe-btn">
              <i className="fas fa-cloud-download-alt"></i>Save Recipe
            </button>
            <button className="cancel-btn" onClick={closeModal}>
              <i className="fa-solid fa-rectangle-xmark"></i>Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
