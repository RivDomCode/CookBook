import React, { useState } from "react";
// import { CardRecipe } from "./CardRecipe";

export const APISearchScreen = () => {
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue !== "") {
      setCategories([searchValue, ...categories]);
      setSearchValue("");
    }
    console.log(searchValue, categories);
  };

  //Fetch to API
  const getRecipes = async () => {
    const url =
      "https://api.spoonacular.com/recipes/findByIngredients?ingredients=meat&number=30&apiKey=0684986a35d049e19c04cc18e918db98";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
  };

  getRecipes();

  return (
    <div className="APIsearch">
      <form onSubmit={handleSearchSubmit}>
        <h3>GET INSPIRATION FROM SPOONACULAR API</h3>
        <input
          type="text"
          placeholder="Type an ingredient here..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button className="searchAPI-btn">
          <i className="fa-brands fa-searchengin"></i>Search
        </button>
      </form>
      <div className="my-recipes__recipesLayout"></div>
    </div>
  );
};
