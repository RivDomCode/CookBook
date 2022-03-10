import React from "react";
import { recipeData } from "../data/recipeDataBase";

export const Filter = ({ recipeList, recipeCat }) => {
  const getRecipeCategory = (cat = { recipeCat }) => {
    console.log("click");
    return recipeData.filter((recipe) =>
      recipe.recipeCat.includes({ recipeCat })
    );
  };

  return (
    <div className="my-recipes__filter">
      <div
        className="my-recipes__filter__card fish"
        onClick={getRecipeCategory}
      >
        <p>
          <i className="fa-solid fa-border-all filter_icons"></i>
          All
        </p>
      </div>
      <div className="my-recipes__filter__card meat">
        <p>
          <i className="fa-solid fa-drumstick-bite filter_icons"></i>Meat
        </p>
      </div>
      <div className="my-recipes__filter__card veggies">
        <p>
          <i className="fa-solid fa-carrot filter_icons"></i>Veggies
        </p>
      </div>{" "}
      <div className="my-recipes__filter__card fish">
        <p>
          <i className="fa-solid fa-fish filter_icons"></i>Fish
        </p>
      </div>
      <div className="my-recipes__filter__card fish">
        <p>
          <i className="fa-solid fa-ice-cream filter_icons"></i>Desserts
        </p>
      </div>
    </div>
  );
};
