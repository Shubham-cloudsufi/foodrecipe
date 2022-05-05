import React, { useEffect, useState } from "react";
import food from "./Icons/food.svg";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const NavWrapperTile = styled("div")`
  .navbar {
    overflow: hidden;
    height: 50px;
    box-shadow: rgb(255 255 255) 0px 0px 0px 2px,
      rgb(0 24 44 / 65%) 0px 4px 6px -1px, rgb(0 255 255 / 8%) 0px 1px 0px inset;
  }
  
  .head {
    width: 19rem;
    text-align: center;
    margin: 0.25rem 0 0 1rem;
    color: black;
    font-weight: 100;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    text-decoration: none;
    font-size: 2rem;
  }

  .food_icon img {
    width: 4.3rem;
    height: 3.25rem;
    float: right;
    position: relative;
    bottom: 0.5rem;
    right: 1.2rem;
  }

  .nav_button{
    /* position: absolute; */
    align-items: center;
    padding:8px 10px; 
    text-align: right;
    margin-top: -1.3rem;
    font-weight:400;
    float: right;
    margin: 0.5rem 1.2rem 0rem 4rem;
  }
  @media screen and (max-width: 500px) {
  .nav_button {
    float: none;
    display: block;
    text-align: left;
  }
}
`;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  function logout() {
    navigate("/auth");
    // localStorage.clear()
    localStorage.getItem("login" , false)
    // console.log(logout)
    console.log("login key", localStorage.getItem("login"))
  }
console.log(visible)
  useEffect(() => {
    let loginData = localStorage.getItem("login");
    console.log("login data coming from here", loginData);
  }, []);

  return (
    <NavWrapperTile>
      <div className="navbar">
        <Link className="head" to="/app">
          FoodGram
        </Link>
        <span className="food_icon">
          <img src={food} alt="arrow" />
        </span>
        { localStorage.getItem("login") == null ? (
          null
        ) : (
          <button  className ="nav_button"
            onClick={() => {
              logout();
              setVisible(true); 
            }}
          >
            Back
          </button>
        )}
      </div>
    </NavWrapperTile>
  );
};

export default Navbar;
