import React, { useState } from "react";
import { APIlayout } from "./APIlayout";

export const APISearchScreen = () => {
  const [categories, setcategories] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 2) {
      setcategories([inputValue, ...categories]);
      setInputValue("");
    }
  };

  const [inputValue, setInputValue] = useState("");

  const handleSearchChange = (e) => {
    setInputValue(e.target.value);
    console.log();
  };

  return (
    <div className="APIsearch">
      <form onSubmit={handleSearchSubmit}>
        <h3>GET INSPIRATION FROM SPOONACULAR API</h3>
        <input
          type="text"
          placeholder="Type your ingredients here..."
          name="inputValue"
          value={inputValue}
          onChange={handleSearchChange}
        />
        <button className="searchAPI-btn">
          <i className="fa-brands fa-searchengin"></i>
          Search
        </button>
      </form>
      {categories.map((category) => (
        <APIlayout category={category} key={Math.random()} />
      ))}
    </div>
  );
};
