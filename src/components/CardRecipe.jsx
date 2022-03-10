import React from "react";
import { Link } from "react-router-dom";

export const CardRecipe = ({
  id,
  title,
  elaboration,
  imgUrl,
  ingredients,
  recipeCat,
}) => {
  return (
    <div className="cardRecipe">
      <img src={imgUrl} alt="recipp-img" />
      <div className="cardRecipe_text-container">
        <div className="cardRecipe_title-container">
          <p className="cardRecipe__title">{title}</p>
          <span className="recipe-cat">{recipeCat}</span>
        </div>
        <p>
          <strong>Ingredients: </strong>
          {ingredients}
        </p>
        <p className="cardRecipe__text">
          <strong>Elaboration:</strong> {elaboration}
        </p>
        <div className="cardRecipe_btnContainer">
          <button className="delete-btn">
            <i className="far fa-trash-alt"></i>Delete
          </button>
          <button className="readMore-btn">
            <Link to={`./RecipeDetail/${id}`} className="readLink">
              <i className="fab fa-readme"></i>Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
