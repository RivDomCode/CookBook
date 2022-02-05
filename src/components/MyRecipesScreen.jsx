import React from "react";
import { CardRecipe } from "./CardRecipe";

export const MyRecipesScreen = () => {
  return (
    <div className="my-recipes">
      <div className="my-recipes__filter">
        <div className="my-recipes__filter__card meat">
          <p>Meat</p>
        </div>
        <div className="my-recipes__filter__card veggies">
          <p>Veggies</p>
        </div>{" "}
        <div className="my-recipes__filter__card fish">
          <p>Fish</p>
        </div>
      </div>
      <div className="my-recipes__addButton">
        <button className="my-recipes__addButton__btn">
          <i className="fas fa-plus"></i>
          Add new Recipe
        </button>
      </div>
      <div className="my-recipes__recipesLayout">
        <CardRecipe />
        <CardRecipe /> <CardRecipe />
      </div>
    </div>
  );
};
