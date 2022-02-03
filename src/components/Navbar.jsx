import React from "react";
import { Link } from "react-router-dom";
import cookLogo from "../img/cooklogo.png"; //Logo taken from this place: <a href="https://www.flaticon.com/free-icons/food-and-restaurant" title="food and restaurant icons">Food and restaurant icons created by Icongeek26 - Flaticon</a>
import brokenChili from "../img/brokenChili.png";
import chiles from "../img/chiles.png";
import food from "../img/food.png";

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={cookLogo} alt="logo" className="navbar__logo__img" />
          <span className="navbar__logo__titles">The CookBook</span>
        </div>
        <div className="navbar__links">
          <Link to="/">
            <span className="navbar__links__link">My Recipes</span>
          </Link>
          <Link to="APISearch">
            <span className="navbar__links__link">API Search</span>
          </Link>
        </div>
      </nav>
      <div className="header-img">
        <img src={food} alt="" className="delicious-img" />
        <img src={chiles} alt="" className="chiles" />
      </div>
    </header>
  );
};