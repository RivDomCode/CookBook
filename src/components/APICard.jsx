import React from "react";

export const APICard = ({ id, title, img, ingredients, elaboration }) => {
  let newIngredients = ingredients.join(", ");

  return (
    <div className="APIcardRecipe">
      <div className="recipeDetail">
        <div className="recipeDetail__left">
          <img src={img} alt="recipp-img" />
        </div>
        <div className="recipeDetail_right">
          <p className="recipeDetail_right__title">{title}</p>
          <p className="recipeDetail_right__subtitles">Ingredients:</p>
          <p className="recipeDetaileIngredients"> {newIngredients}</p>
          <p className="recipeDetail_right__subtitles">Elaboration</p>
          <p className="recipeDetail_right__text">{elaboration}</p>
          <div className="recipeDetail_right__container"></div>
        </div>
      </div>
    </div>
  );
};
