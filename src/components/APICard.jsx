import React from "react";

export const APICard = ({ id, title, img }) => {
  return (
    <div className="cardRecipe">
      <img src={img} alt="recipp-img" />
      <div className="cardRecipe_text-container">
        <p className="cardRecipe__title">{title}</p>
        <p>
          <strong>Ingredients:</strong>
        </p>
        <p className="cardRecipe__text">
          <strong>Elaboration:</strong>
        </p>
      </div>
    </div>
  );
};
