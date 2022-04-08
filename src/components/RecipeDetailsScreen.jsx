import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const RecipeDetailsScreen = ({ history }) => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  const location = useLocation();
  const recipeDetailData = location.state;
  const { title, elaboration, ingredients, imgUrl } = recipeDetailData;

  return (
    <div className="recipeDetail">
      <div className="recipeDetail__left">
        <img src={imgUrl} alt="" />
      </div>
      <div className="recipeDetail_right">
        <p className="recipeDetail_right__title">{title}</p>
        <p className="recipeDetail_right__subtitles">Ingredients</p>
        <ul>{ingredients}</ul>
        <p className="recipeDetail_right__subtitles">Elaboration</p>
        <p className="recipeDetail_right__text">{elaboration}</p>
        <div className="recipeDetail_right__container">
          <button className="readMore-btn back" onClick={handleReturn}>
            <i className="far fa-arrow-alt-circle-left"></i> Back to Main
          </button>
        </div>
      </div>
    </div>
  );
};
