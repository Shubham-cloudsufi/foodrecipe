import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as FoodBackGround } from "./Icons/FoodLogo.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavWrapperTile = styled("div")`
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    height: 54px;
    z-index: 1;
    box-shadow: rgb(255 255 255) 0px 0px 0px 2px,
      rgb(0 24 44 / 35%) 0px 4px 6px -1px, rgb(0 255 255 / 1%) 0px 1px 0px inset;
  }

  .head {
    margin: 0rem 0 0 0rem;
    float: left;
    font-weight: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px,
      rgb(0 0 0 / 30%) 0px 30px 60px -30px;
  }

  .link {
    text-decoration: none;
    color: grey;
  }

  .food_icon {
    width: 3.25rem;
    height: 3.25rem;
    bottom: 0.3rem;
    margin: -0.4rem 0 0 0.5rem;
    .food_logo_first {
      fill: grey;
    }
    .food_logo_second {
      fill: #e3ceb9;
    }
    .food_logo_third {
      fill: pink;
    }
    .food_logo_fourth {
      fill: red;
    }
    .food_logo_fifth {
      fill: red;
    }
    .food_logo_sixth {
      fill: red;
    }
  }

  .nav_button {
    padding: 8px 10px;
    font-weight: 400;
    margin: 4rem 0rem 0rem 0;
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
    margin: -3.3rem 0.5rem 2rem 0;
    text-align: center;
    border: 1px solid white;
  }
  .select_app {
    margin: 83px 0 0 0;
  }
  @media screen and (max-width: 500px) {
    .nav_button {
      right: 2%;
    }
    .head {
      margin: 0 0 0 0;
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
      margin: 0.2rem 0 0 0rem;
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
  .dropdown {
    cursor: pointer;
    background-color: white;
  }
  .dropdown_btn {
    padding: 0 0 0 0;
    margin: 55px 0 0 0;
  }
  .dropdown_item {
    padding: 0 0 0 0;
    text-decoration: none;
    border-color: white;
    border: 1px solid grey;
    width: 4rem;
    cursor: pointer;
  }
  .image_dropdown {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }
  .dropdown_now {
    padding: 0 0 0 0;
  }
  .dropdown_link {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  .fas .fa-caret-down {
    background-color: yellow;
  }
`;

function Navbar({ setAuthenticate }) {
  // const [visible, setVisible] = useState(false);
  const [isActive, setActive] = useState(false);
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
    setActive(false)
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
    setActive(isActive);
  }, [isActive]);

  return (
    <NavWrapperTile>
      <div className="navbar">
        <h1 className="head">
          <FoodBackGround className="food_icon " />
          <Link className="link" to="/">
            FoodGram
          </Link>
        </h1>

        <div className="app_icon">
          {location.pathname === "/Profile" ? (
            <button
              className="nav_button"
              onClick={() => {
                logout();
                setActive(false);
              }}
            >
              Back
            </button>
          ) : null}
          {location.pathname === "/app" ? (
            <div className="dropdown">
              <div
                className="dropdown_btn"
                onClick={() => setActive(!isActive)}
              >
                <img
                  className="image_dropdown"
                  src="https://avatars.githubusercontent.com/u/78645691?s=96&v=4"
                />
                <span className="fas fa-caret-down"></span>
              </div>
              {isActive && (
                <div className="dropdown_now">
                  <div className="dropdown_item">
                    <Link className="dropdown_link" to="/Profile">
                      Profile
                    </Link>
                  </div>
                  <div className="dropdown_item" onClick={logoutnow}>
                    logout
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
        {/* {location.pathname === "/app" ? (
            <button className="profile_icon icon">
              <Link to="/Profile">
                <img src="https://avatars.githubusercontent.com/u/78645691?s=96&v=4" />
              </Link>
            </button>
          ) : null}  */}

        {/* {location.pathname === "/app" ? (
          <button className="logout icon" onClick={logoutnow}>
            <h1>Logout</h1>
          </button>
        ) : null}  */}
      </div>
    </NavWrapperTile>
  );
}

export default Navbar;
