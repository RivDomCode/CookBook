import React from "react";
import { CardRecipe } from "./CardRecipe";

export const APISearchScreen = () => {
  return (
    <div className="APIsearch">
      <form>
        <h3>GET INSPIRATION FROM SPOONACULAR API</h3>
        <input type="text" placeholder="Type an ingredient here..." />
        <button className="searchAPI-btn">
          <i className="fa-brands fa-searchengin"></i>Search
        </button>
      </form>
      <div className="my-recipes__recipesLayout">
        <CardRecipe />
        <CardRecipe />
        <CardRecipe />
      </div>
    </div>
  );
};
