import React from "react";
import food from "./Icons/food.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrapperTile = styled("div")`
  .header {
    width: 19rem;
    text-align: center;
    margin: 0.25rem 0 0 -3.7rem;
    color: black;
    font-weight: 100;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
  .head{
    text-decoration:none;
  }
  .food_icon img {
    position: absolute;
    width: 4.3rem;
    height: 3.25rem;
    align-items: center;
    text-align: right;
    margin-top: 1.3rem;
    margin: -3.1rem 0 1.8rem 79rem;
  }

  .navbar {
    height: 50px;
    box-shadow: rgb(255 255 255) 0px 0px 0px 2px,
      rgb(0 24 44 / 65%) 0px 4px 6px -1px, rgb(0 255 255 / 8%) 0px 1px 0px inset;
  }
`;
const Navbar = () => {
  return (
    <NavWrapperTile>
      <div className="navbar">
      <Link className="head" to="/app">
        <h1 className="header">FoodGram</h1>
      </Link>
        <span className="food_icon">
          <img src={food} alt="arrow" />
        </span>
      </div>
    </NavWrapperTile>
  );
};

export default Navbar;
