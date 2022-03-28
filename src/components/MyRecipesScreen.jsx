import React, { useState } from "react";
import { useGlobalContext } from "../context/appContext";
import { generateId } from "../helpers/generateId";
import { CardRecipe } from "./CardRecipe";
import { Filter } from "./Filter";
import Swal from "sweetalert2";

export const MyRecipesScreen = ({ category }) => {
  //Open close new recipe modal
  const { isActive, closeModal, openModal } = useGlobalContext();
  //Save recipes
  const [recipeList, setRecipeList] = useState([]);
  //Get Values from new-recipe form
  const initialState = {
    id: generateId(),
    title: "",
    ingredients: "",
    recipeCat: "",
    imgUrl: "",
    elaboration: "",
  };
  const [value, setValue] = useState(initialState);

  const { title, imgUrl, elaboration, ingredients, recipeCat } = value;

  const handleChange = ({ target }) => {
    setValue({ ...value, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //form validations
    if (title === "" || ingredients === "" || elaboration === "") {
      Swal.fire({
        title: "All fields are required!",
        icon: "error",
        confirmButtonColor: "#5c9bdb",
        confirmButtonText: "Cool!",
      });
      return;
    } else if (
      recipeCat !== "fish" &&
      recipeCat !== "meat" &&
      recipeCat !== "veggie" &&
      recipeCat !== "dessert"
    ) {
      console.log("category should be ...");
      Swal.fire({
        title: "Type a category between fish, meat, veggie or dessert, please!",
        icon: "error",
        confirmButtonColor: "#5c9bdb",
        confirmButtonText: "Understood!",
      });
      return;
    }
    setRecipeList([value, ...recipeList]);
    setValue(initialState);
    closeModal();
  };

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
    <>
      <div
        className={`${isActive ? "new-recipe show-new-recipe" : "new-recipe"}`}
      >
        <form className="new-recipe__form" onSubmit={handleSubmit}>
          <div className="new-recipe__form__inputs">
            <h2>New Recipe</h2>
            <input
              type="text"
              className="form-inputs"
              placeholder="Recipe Title"
              name="title"
              value={title}
              onChange={handleChange}
            />

            <input
              type="text"
              className="form-inputs inputCat"
              placeholder="Type a category between meat, fish, veggie or dessert"
              name="recipeCat"
              value={recipeCat}
              onChange={handleChange}
            />

            <input
              type="text"
              className="form-inputs"
              placeholder="Ingredients"
              name="ingredients"
              value={ingredients}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-inputs"
              placeholder="Image URL"
              name="imgUrl"
              value={imgUrl}
              onChange={handleChange}
            />
            <textarea
              type="text"
              className="form-inputs"
              placeholder="Elaboration"
              name="elaboration"
              value={elaboration}
              onChange={handleChange}
            />
            <div className="new-recipe__form__btns">
              <button className="saveRecipe-btn" type="submit">
                <i className="fas fa-cloud-download-alt"></i>Save Recipe
              </button>
              <button className="cancel-btn" type="reset" onClick={closeModal}>
                <i className="fa-solid fa-rectangle-xmark"></i>Cancel{" "}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="my-recipes">
        <Filter
          showAll={showAll}
          showMeat={showMeat}
          showFish={showFish}
          showDessert={showDessert}
          showVeggie={showVeggie}
        />
        <div className="my-recipes__addButton">
          <button className="my-recipes__addButton__btn" onClick={openModal}>
            <i className="fas fa-plus"></i>
            Add new Recipe
          </button>
        </div>
        <div className="my-recipes__recipesLayout">
          {recipeList.map((recipe) => {
            return <CardRecipe key={recipe.id} {...recipe} />;
          })}
        </div>
      </div>
    </>
  );
};
