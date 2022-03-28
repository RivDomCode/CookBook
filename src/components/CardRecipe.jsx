import React from "react";
import { Link } from "react-router-dom";

export const CardRecipe = ({
  id,
  title,
  elaboration,
  imgUrl,
  ingredients,
  recipeCat,
  deleteRecipe,
}) => {
  const maxLength = 180;

  const myData = { id, title, elaboration, ingredients, imgUrl, deleteRecipe };

  const noimg =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png";

  const handleDelete = () => {
    deleteRecipe(id);
  };

  return (
    <div className="cardRecipe">
      <img src={imgUrl ? imgUrl : noimg} alt="recipp-img" />
      <div className="cardRecipe_text-container">
        <div className="cardRecipe_title-container">
          <p className="cardRecipe__title">{title}</p>
          <span className="recipe-cat">{recipeCat}</span>
        </div>
        <p>
          <strong>Ingredients: </strong>
          {ingredients}
        </p>
        <div className="cardRecipe__text">
          <strong>Elaboration:</strong>{" "}
          {elaboration.length > maxLength ? (
            <div className="cardRecipe__text">
              {`${elaboration.substring(0, maxLength)}`}
              ...
            </div>
          ) : (
            <div className="cardRecipe__text">{elaboration}</div>
          )}
        </div>
        <div className="cardRecipe_btnContainer">
          <button type="button" className="delete-btn" onClick={handleDelete}>
            <i className="far fa-trash-alt"></i>Delete
          </button>
          <button className="readMore-btn">
            <Link
              to={`./RecipeDetail/${id}`}
              state={myData}
              className="readLink"
            >
              <i className="fab fa-readme"></i>Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
