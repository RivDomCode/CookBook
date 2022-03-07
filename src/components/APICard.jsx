import React from "react";

export const APICard = ({ id, title, img }) => {
  return (
    <div className="cardRecipe apicard">
      <img src={img} alt="recipp-img" />
      <div className="cardRecipe_text-container">
        <p className="cardRecipe__title">{title}</p>
      </div>
    </div>
  );
};
