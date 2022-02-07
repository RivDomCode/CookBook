import React from "react";

export const NewRecipeScreen = () => {
  return (
    <div className="new-recipe">
      <p>New Recipe</p>
      <form className="new-recipe__form">
        <input type="text" placeholder="Recipe Title" />
        <input type="text" placeholder="Recipe Title" />
        <input type="text" placeholder="Recipe Title" />
      </form>
    </div>
  );
};
