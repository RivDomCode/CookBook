import React from "react";
import { Link } from "react-router-dom";

export const CardRecipe = ({ id, title, category, elaboration, imgUrl }) => {
  return (
    <div className="cardRecipe">
      <img src={imgUrl} alt="recipp-img" />
      <p className="cardRecipe__title">{title}</p>
      <p className="cardRecipe__text">{elaboration}</p>
      <div className="cardRecipe_btnContainer">
        <button className="delete-btn">
          <i className="far fa-trash-alt"></i>Delete
        </button>
        <button className="readMore-btn">
          <Link to="RecipeDetail" className="readLink">
            <i className="fab fa-readme"></i>Read More
          </Link>
        </button>
      </div>
    </div>
  );
};
