import React from "react";

export const CardRecipe = () => {
  return (
    <div className="cardRecipe">
      <img
        src="https://images.unsplash.com/photo-1571805341302-f857308690e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        alt="recipp-img"
      />
      <h3>Special Chicken</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
        nostrum aperiam corporis? Magni libero, nobis corporis saepe quasi
        officiis beatae dicta perferendis labore dolores velit ipsa, facilis aut
        veritatis exercitationem
      </p>
      <div className="cardRecipe_btnContainer">
        <button className="delete-btn">Delete Recipe</button>
        <button className="readMore-btn">Read More</button>
      </div>
    </div>
  );
};
