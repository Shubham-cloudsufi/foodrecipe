import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as FoodBackGround } from "./Icons/FoodLogo.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavWrapperTile = styled("div")`
  .navbar {
    position: fixed;
    display: flex;
    justify-content: space-between;
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
    color: green;
  }

  .food_icon {
    width: 3.25rem;
    bottom: 0.3rem;
    margin: -0.4rem 1rem 0 1rem;
    .food_logo_first {
      fill: grey;
    }
    .food_logo_second {
      fill: green;
    }
    .food_logo_third {
      fill: red;
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
    margin: 1rem 1rem 0rem 0;
  }
  .logout {
    font-weight: 100;
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
    }
    .logout {
      right: 3%;
    }

    .profile_icon img {
      right: 97px;
      margin: 0.2rem 0 0 0rem;
    }
  }

  .dropdown {
    cursor: pointer;
    background-color: white;
  }
  .dropdown_btn {
    padding: 0 0 0 0;
    margin: 2px 0 0 0;
  }
  .dropdown_item {
    text-align: center;
    padding: 0.3rem 0rem;
  }
  .dropdown_item:hover {
    /* border: 1px solid white; */
    background-color: #6c63ff;
  }

  .image_dropdown {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    padding: 0 1rem;
    margin-top: 2px;
  }
  .dropdown_now {
    padding: 0 0 0 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
  .dropdown_link {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  .fas .fa-caret-down {
    background-color: yellow;
  }

  .app_icon{
    /* width: 10rem; */
    /* height: 5rem; */
  }

`;

function Navbar({ setAuthenticate }) {
  // const [visible, setVisible] = useState(false);
  const [isActive, setActive] = useState(false);
  const location = useLocation();

  let navRef = useRef(null);


  // const escFunction = useCallback((e) => {
    // if (e.keyCode === 27) {
    //   setActive(false)
    //   console.log("esc pressed");
    // }
  // }, []);

  useEffect(() => {
    const handler = (e) => {
      if (!navRef?.current?.contains(e.target)) {
        setActive(false);
        // console.log(e);
      }
    }
      const handler2 = (e) =>{
        if (e.keyCode === "Escape") {
          setActive(false);
          console.log("esc pressed");
        }
    };
    document.addEventListener("mousedown", handler);

    document.addEventListener("keydown", handler2,false);
    
    return () => {
      document.removeEventListener("keydown", handler2 , false);
      document.removeEventListener("mousedown", handler);
    }
  }, []);

  const navigate = useNavigate();
  function logout() {
    navigate("/app");
  }
  function logoutnow() {
    // logoutx();
    localStorage.clear();
    setAuthenticate(false);
    setActive(false);
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
            <div ref={navRef} className="dropdown">
              <div
                className="dropdown_btn"
                onClick={() => setActive(!isActive)}
              >
                <img
                  className="image_dropdown"
                  src="https://avatars.githubusercontent.com/u/78645691?s=96&v=4"
                />
                
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
      </div>
    </NavWrapperTile>
  );
}

export default Navbar;
