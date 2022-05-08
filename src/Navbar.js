import React, { useEffect, useState } from "react";
import food from "./Icons/food.svg";
import styled from "styled-components";
import {useNavigate,useLocation } from "react-router-dom";

const NavWrapperTile = styled("div")`
  .navbar {
    overflow: hidden;
    height: 60px;
    box-shadow: rgb(255 255 255) 0px 0px 0px 2px,
      rgb(0 24 44 / 65%) 0px 4px 6px -1px, rgb(0 255 255 / 8%) 0px 1px 0px inset;
  }
  
  .head {
    margin: 0.25rem 0 0 1.1rem;
    color: black;
    font-weight: 100;
    box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px,
      rgb(0 0 0 / 30%) 0px 30px 60px -30px;
  }

  .food_icon img {
    width: 4.3rem;
    height: 3.25rem;
    float: right;
    position: relative;
    bottom: 3rem;
    right: 1.2rem;
  }

  .nav_button{
    align-items: center;
    padding:8px 10px; 
    text-align: right;
    /* margin-top: -1.3rem; */
    font-weight:400;
    float: right;
    margin: -2rem 1.4rem 0 0;
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
  const location = useLocation()
  console.log("uselocation hook",location)

  const navigate = useNavigate();
  function logout() {
    navigate("/auth");
    localStorage.getItem("login" , false)
    console.log("login key", localStorage.getItem("login"))
  }
  console.log(visible)
  useEffect(() => {
    let loginData = localStorage.getItem("login");
    console.log("login data coming from here", loginData);
    console.log("first second" , loginData)
  }, []);

  return (
    <NavWrapperTile>
      <div className="navbar">
        <h1 className="head" to="/app">
          FoodGram
        </h1>
        <span className="food_icon">
          <img src={food} alt="arrow" />
        </span>
        { location.pathname === "/auth" ? (
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
