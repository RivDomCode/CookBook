import React from "react";

export const Filter = ({ setRecipeList, recipeList }) => {
  //Filter buttons
  const meat = recipeList.filter((recipe) => recipe.recipeCat === "meat");
  const fish = recipeList.filter((recipe) => recipe.recipeCat === "fish");
  const veggie = recipeList.filter((recipe) => recipe.recipeCat === "veggie");
  const dessert = recipeList.filter((recipe) => recipe.recipeCat === "dessert");

  const showAll = () => {
    setRecipeList(recipeList);
  };

  const showMeat = () => {
    setRecipeList(meat);
  };

  const showFish = () => {
    setRecipeList(fish);
  };
  const showVeggie = () => {
    setRecipeList(veggie);
  };
  const showDessert = () => {
    setRecipeList(dessert);
  };
  //End of filter btn logic

  return (
    <div className="my-recipes__filter">
      <div className="my-recipes__filter__card fish" onClick={showAll}>
        <p>
          <i className="fa-solid fa-border-all filter_icons"></i>
          All
        </p>
      </div>
      <div className="my-recipes__filter__card meat" onClick={showMeat}>
        <p>
          <i className="fa-solid fa-drumstick-bite filter_icons"></i>Meat
        </p>
      </div>
      <div className="my-recipes__filter__card veggies" onClick={showVeggie}>
        <p>
          <i className="fa-solid fa-carrot filter_icons"></i>Veggies
        </p>
      </div>{" "}
      <div className="my-recipes__filter__card meat" onClick={showFish}>
        <p>
          <i className="fa-solid fa-fish filter_icons"></i>Fish
        </p>
      </div>
      <div className="my-recipes__filter__card veggies" onClick={showDessert}>
        <p>
          <i className="fa-solid fa-ice-cream filter_icons"></i>Desserts
        </p>
      </div>
    </div>
  );
};
