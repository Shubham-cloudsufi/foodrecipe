import React, { useEffect, useState } from "react";
import food from "./Icons/food.svg";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavWrapperTile = styled("div")`
  .navbar {
    position: fixed;
    top: 0;
    width: 99%;
    background-color: white;
    height: 54px;
    z-index: 1;
    box-shadow: rgb(255 255 255) 0px 0px 0px 2px,
      rgb(0 24 44 / 35%) 0px 4px 6px -1px, rgb(0 255 255 / 1%) 0px 1px 0px inset;
  }

  .head {
    margin: 1rem 0 0 4.3rem;
    color: black;
    position: absolute;
    float: left;
    font-weight: 100;
    box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px,
      rgb(0 0 0 / 30%) 0px 30px 60px -30px;
  }

  .head2{
    margin: 0.7rem 0 0 0.5rem;
    color: black;
    position: absolute;
    float: left;
    font-weight: 100;
    box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px,
      rgb(0 0 0 / 30%) 0px 30px 60px -30px;
  }

  .head5{
    margin: 0.7rem 0 0 0.5rem;
    color: black;
    position: absolute;
    float: left;
    font-weight: 100;
    box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px,
      rgb(0 0 0 / 30%) 0px 30px 60px -30px;
  }

  .food_icon img {
    width: 4.3rem;
    height: 3.25rem;
    /* float: right; */
    position: relative;
    bottom: 0.3rem;
    /* right: 80px; */
    margin: 0.7rem 0 0 0.5rem;
  }
  .food_icon2 {
    width: 3.3rem;
    height: 2rem;
    float: right;
    position: relative;
    bottom: 0.2rem;
    right: 1.4%;
  }
  .food_icon3 {
    width: 3.3rem;
    height: 2rem;
    float: right;
    position: relative;
    bottom: 0.2rem;
    right: 1.4%;
  }

  .nav_button {
    position: absolute;
    padding: 8px 10px;
    text-align: right;
    font-weight: 400;
    float: right;
    margin: 10rem 0rem -0.5rem -2.2rem;
  }
  .logout {
    font-weight: 100;
    /* max-width: 4.3rem; */
    height: 3rem;
    top: 0.4rem;
    float: right;
    position: absolute;
    bottom: 2.5rem;
    right: 0%;
  }

  .logout h1 {
    font-weight: 100;
  }
  .profile_icon img {
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    background-color: white;
    border-radius: 50%;
    border: 1px solid grey;
    top: 10px;
    right: 91px;
  }
  .app_icon {
    float: right;
    display: flex;
    align-items: center;
    margin: -3.3rem 1.5rem 2rem 0;
    text-align: center;
    border: 1px solid white;
  }
  @media screen and (max-width: 500px) {
    .nav_button {
      right: 2%;
    }
    .head {
      margin: 1rem 0 0 3.7rem;
    }
    .food_icon img {
      width: 3rem;
      height: 3rem;
      /* right: 26.5%; */
    }
    .logout {
      right: 3%;
    }

    .profile_icon img {
      right: 97px;
      margin:0.2rem 0 0 0rem;
    }
  }
  /* @media screen and (max-width: 1000px) {
  .head {
    margin: 0.25rem 0 0 0;
  }
  .food_icon img {
    width: 3rem;
    height: 3rem;
    right: 13%;
  }
  .logout {
    right: 1%;
  }
  .profile_icon img {
    right: 20%;
  }
  } */
`;

function Navbar({ setAuthenticate }) {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  // console.log("uselocation hook", location);
  // console.log("logoutx",logoutx)

  const navigate = useNavigate();
  function logout() {
    navigate("/app");
  }
  function logoutnow() {
    // logoutx();
    localStorage.clear();
    setAuthenticate(false);
    // navigate("/auth");
    console.log("loging out now");
    // localStorage.getItem("login", false);
    // console.log("login key", localStorage.getItem("login"));
    console.log("logout clear", logoutnow);
  }
  // console.log(visible);
  useEffect(() => {
    let loginData = localStorage.getItem("login");
    // console.log("login data coming from here", loginData);
    // console.log("first second", loginData);
  }, []);

  return (
    <NavWrapperTile>
      <div className="navbar">
        {location.pathname === "/foodrecipe/" ?
        <h1 className="head5" to="/app">
          FoodGram
        </h1>: null }
        {location.pathname === "/app" ? (
          <h1 className="head" to="/app">
            FoodGram
          </h1>
        ) : null}
        {/* {location.pathname === "/app" ? (
          <h1 className="head2" to="/app">
            FoodGram
          </h1>
        ) : null} */}
        {location.pathname === "/auth" ? (
          <span className="food_icon2">
            <img src={food} alt="arrow" />
          </span>
        ) : null}
        {location.pathname === "/Profile" ? (
          <span className="food_icon">
            <img src={food} alt="arrow" />
          </span>
        ) : null}
        {location.pathname === "/" ? (
          <span className="food_icon3">
            <img src={food} alt="arrow" />
          </span>
        ) : null}
        {location.pathname === "/app" ? (
          <span className="food_icon">
            <img src={food} alt="arrow" />
          </span>
        ) : null}
        <div className="app_icon">
          {location.pathname === "/Profile" ? (
            <button
              className="nav_button"
              onClick={() => {
                logout();
                setVisible(true);
              }}
            >
              Back
            </button>
          ) : null}
          {location.pathname === "/app" ? (
            <button className="profile_icon icon">
              <Link to="/Profile">
                <img src="https://avatars.githubusercontent.com/u/78645691?s=96&v=4" />
              </Link>
            </button>
          ) : null}
        </div>

        {location.pathname === "/app" ? (
          <button className="logout icon" onClick={logoutnow}>
            <h1>Logout</h1>
          </button>
        ) : null}
      </div>
    </NavWrapperTile>
  );
}

export default Navbar;
