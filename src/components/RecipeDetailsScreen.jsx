import React from "react";
import { useNavigate } from "react-router-dom";

export const RecipeDetailsScreen = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="recipeDetail">
      <div className="recipeDetail__left">
        <img
          src="https://images.unsplash.com/photo-1571805341302-f857308690e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt=""
        />
      </div>
      <div className="recipeDetail_right">
        <p className="recipeDetail_right__title"></p>
        <p className="recipeDetail_right__subtitles">Ingredients</p>
        <ul>
          <li>Chicken</li>
          <li>Lemon</li>
          <li>Coconut milk</li>
        </ul>
        <p className="recipeDetail_right__subtitles">Elaboration</p>
        <p className="recipeDetail_right__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          adipisci, accusantium error at earum repellendus aliquam ratione!
          Harum, recusandae aperiam? Dolor temporibus dolores enim a sequi unde
          laudantium, consequuntur ab. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Fugiat eum aperiam labore aspernatur, expedita
          cumque? Saepe eligendi voluptate molestias non vel ipsam. Consectetur
          praesen
        </p>
        <div className="recipeDetail_right__container">
          <button className="readMore-btn" onClick={handleReturn}>
            <i className="far fa-arrow-alt-circle-left"></i> Back to Main
          </button>
          <button className="delete-btn">
            <i className="far fa-trash-alt"></i>Delete
          </button>
        </div>
      </div>
    </div>
  );
};
