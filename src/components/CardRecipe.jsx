import React from "react";
import { Link } from "react-router-dom";

export const CardRecipe = () => {
  return (
    <div className="cardRecipe">
      <img
        src="https://images.unsplash.com/photo-1571805341302-f857308690e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        alt="recipp-img"
      />
      <p className="cardRecipe__title">Special Chicken</p>
      <p className="cardRecipe__text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
        nostrum aperiam corporis? Magni libero, nobis corporis saepe quasi
        officiis beatae dicta perferendis labore dolores velit ipsa, facilis aut
        veritatis exercitationem
      </p>
      <div className="cardRecipe_btnContainer">
        <button className="delete-btn">
          <i className="far fa-trash-alt"></i>Delete
        </button>
        <button className="readMore-btn">
          <Link to="RecipeDetail" className="readLink">
            <i className="fab fa-readme"></i>Read More
          </Link>
        </button>
      </div>
    </div>
  );
};
