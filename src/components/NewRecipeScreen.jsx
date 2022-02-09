import React, { useRef } from "react";

export const NewRecipeScreen = () => {
  const addImg = useRef();

  const handleAddImg = (e) => {
    e.preventDefault();
    addImg.current.click();
  };

  return (
    <div className="new-recipe">
      <form className="new-recipe__form">
        <button className="close-btn">x</button>
        <div className="new-recipe__form__inputs">
          <h2>New Recipe</h2>
          <input type="text" placeholder="Recipe Title" />
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
              <i class="far fa-image"></i>Add an Image
            </button>
            <button className="saveRecipe-btn">
              <i class="fas fa-cloud-download-alt"></i>Save Recipe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
