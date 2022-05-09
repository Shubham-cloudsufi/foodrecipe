import React, { useState } from "react";
import styled from "styled-components";
import RecipeTile from "./RecipeTile";
import axios from "axios";
import SkeletonArticle from "./SkeletonArticle";
import food from "./Icons/food.svg";
import { Link, useNavigate } from "react-router-dom";
const AppWrapperTile = styled("div")`
  html {
    font-size: 16px;
  }
  .app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6.8rem;
    margin-right: 12rem;
    margin-bottom: 6.2rem;
  }
  .header {
    margin: 0.25rem 0.5rem 0 1.3rem;
    color: black;
    font-weight: 100;
    box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px,
      rgb(0 0 0 / 30%) 0px 30px 60px -30px;
  }
  .recipe_app {
    display: grid;
    grid-template-columns: 15rem 15rem 15rem;
    grid-gap: 1.8rem 7.2rem;
  }
  .app_form {
    background-color: rgb(255, 255, 255);
    margin: 0 auto;
    width: 100%;
    position: fixed;
    height: 3.7rem;
    right: 0.2rem;
    top: 0px;
    /* box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset; */
      box-shadow: rgb(255 255 255) 0px 0px 0px 2px,
      rgb(0 24 44 / 65%) 0px 4px 6px -1px, rgb(0 255 255 / 8%) 0px 1px 0px inset;
  }
    margin-left: 5rem;
    z-index: 2;
    outline: none;
  }
  #search {
    position: absolute;
    border: 1px solid rgb(140, 141, 158);
    left: 34%;
    top: 0.62rem;
    width: 29%;
    height: 2.3rem;
    border-radius: 0.5rem;
    padding-left: 1rem;
    margin-right: 3.1rem;
  }
  .cal {
    font-weight: 100;
    background-color: white;
    color: black;
    margin-top: 0.3rem;
    position: absolute;
    display: inline;
    text-align: end;
    align-items: center;
    padding: 0 0.5rem;
    border-radius: 10px;
    margin-left: 38rem;
    border: 1px solid rgb(196, 175, 175);
  }
  .close-btn {
    font-weight: 100;
    font-size: 1rem;
    cursor: pointer;
    font-weight: bold;
    margin-left: 0.3rem;
    color: black;
    padding: 0 0.2rem;
  }
  .close-btn:hover {
    background-color: rgb(128, 102, 102);
    color: #000;
    border-radius: 3.2rem;
  }
  .app_submit {
    border: inherit;
    background-color: rgb(126, 126, 219);
    color: white;
    position: absolute;
    width: 5.2rem;
    height: 2.45rem;
    top: 0.6rem;
    right: 33%;
    border-radius: 0px 0.4rem 0.4rem 0px;
    cursor: pointer;
  }
  .app_submit:hover {
    background-color: rgb(22, 22, 240);
    transition: all 1s;
  }
  .app-refresh {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 9.3rem 19.5rem;
    height: 3rem;
    border-radius: 0.3rem;
    color: black;
    width: 25rem;
    text-shadow: 0 0 80px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%);
  }

  @media screen and (max-width: 1000px) {
    .recipe_app {
      display: flex;
      display: grid;
      grid-template-columns: 240px 240px;
    }
    .buttons {
      position: fixed;
      background-color: white;
      height: 4.3rem;
      margin-top: 1rem;
      width: 100%;
    }
  }
  @media screen and (max-width: 700px) {
    .recipe_app {
      display: grid;
      grid-template-columns: 15rem;
    }
  }

  @media screen and (max-width: 500px) {
    .recipe_app {
      display: grid;
      grid-template-columns: 240px;
    }
  }

  .conatainer {
    margin-top: 1.3rem;
    margin-bottom: 3.6rem;
    display: flex;
    background-color: rgb(236, 236, 211);
  }
  .page-container {
    margin: 1.2rem;
    list-style: none;
  }
  .page-link {
    text-decoration: none;
    background-color: rgb(153, 214, 214);
    padding: 0 0.3rem;
  }

  .selectValue {
    display: list-item;
    margin-left: 36rem;
    margin-top: 0.4rem;
    width: 5.45rem;
    border: 1px solid rgb(62, 62, 82);
    height: 2.2rem;
    border-radius: 0.3rem;
    cursor: pointer;
  }
  .app_healthlable {
    display: list-item;
    cursor: pointer;
    margin-left: 42rem;
    margin-top: -2.2rem;
    width: 5rem;
    border: 1px solid rgb(62, 62, 82);
    height: 2.2rem;
    border-radius: 0.3rem;
  }
  .buttons {
    position: fixed;
    background-color: white;
    height: 4.3rem;
    margin-top: 1rem;
    width: 100%;
  }
  .food_icon img {
    width: 4.3rem;
    height: 3.25rem;
  }
  .profile_icon img {
    width: 2.5rem;
    height: 2.5rem;
    background-color: white;
    margin: 0.7rem 0 0rem 0rem;
    border-radius: 50%;
    border: 1px solid grey;
  }

  .logout {
    font-weight: 100;
    margin: 0.7rem 0 0rem 0rem;
  }

  .logout h1 {
    font-weight: 100;
  }
  .app_icon {
    float: right;
    display: flex;
    align-items: center;
    margin: -3.3rem 1.5rem 2rem 0;
    text-align: center;
    border: 1px solid white;
  }
  .icon {
    padding: 0px 2px;
    border: 1px solid white;
    background-color: white;
  }
`;

function App({ logoutx }) {
  const [inputValue, setInputValue] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [isLoading, setloading] = useState(false);
  const [caloriesFilterValue, setCaloriesFilterValue] = useState();
  const [visibleHeader, setVisibleHeader] = useState(false);
  const [headertext, setHeaderText] = useState("");
  const [healthLables, setHealthLables] = useState("vegan");

  var url =  `https://api.edamam.com/search?q=${inputValue}&app_id=45918ea0&app_key=${process.env.REACT_APP_API}&from=0&to=40&calories=591-722&health=${healthLables}`;

  function getRecipes() {
    setloading(true);
    axios
      .get(url)
      .then((result) => {
        setrecipes(result.data.hits);
        console.log(result.data);
        console.log(result.data.hits.recipe.calories);
        console.log(result.data.hits[1].recipe.calories);
        setloading(false);
      })
      .catch(() => {
        setloading(false);
      });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  const navigate = useNavigate();
  function logout() {
    logoutx();
    navigate("auth");
    localStorage.clear();
  }

  function change(e) {
    setCaloriesFilterValue(e.target.value);
    setVisibleHeader(true);
    if (e.target.value == 2) {
      setHeaderText("0<1000");
      return;
    } else if (e.target.value == 3) {
      setHeaderText("1000<2000");
      return;
    } else if (e.target.value == 4) {
      setHeaderText("2000<end");
      return;
    }
    console.log("clicked");
    console.log(e.target.value);
  }

  return (
    <AppWrapperTile>
      <div className="app ">
        <form className="app_form" onSubmit={onSubmit}>
          <h1 className="header">FoodGram</h1>
          <input
            id="search"
            type="text"
            placeholder="ENTER NAME"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="app_submit" type="submit" value="Search">
            Search
          </button>
          <div className="buttons">
            <select
              className="selectValue"
              onChange={change}
              value={caloriesFilterValue}
            >
              <option value={1}>Calories</option>
              <option value={2}>0To1000</option>
              <option value={3}>1000To2000</option>
              <option value={4}>2000Toend</option>
            </select>
            {visibleHeader ? (
              <div
                onClick={() => {
                  setVisibleHeader(false);
                  setCaloriesFilterValue(5);
                }}
                className="cal"
              >
                {headertext}
                <span className="close-btn">&times;</span>
              </div>
            ) : null}
            <select className="app_healthlable">
              <option onClick={() => setHealthLables("Vegan")}>Vegan</option>
              <option onClick={() => setHealthLables("Vegetarian")}>
                Vegetarian
              </option>
              <option onClick={() => setHealthLables("Pescatarian")}>
                Pescatarian
              </option>
              <option onClick={() => setHealthLables("Dairy-Free")}>
                Dairy-Free
              </option>
              <option onClick={() => setHealthLables("Gluten-Free")}>
                Gluten-Free
              </option>
              <option onClick={() => setHealthLables("Wheat-Free")}>
                Wheat-Free
              </option>
              <option onClick={() => setHealthLables("Egg-Free")}>
                Egg-Free
              </option>
              <option onClick={() => setHealthLables("Peanut-Free")}>
                Peanut-Free
              </option>
              <option onClick={() => setHealthLables("Tree-Nut-Free")}>
                Tree-Nut-Free
              </option>
              <option onClick={() => setHealthLables("Soy-Free")}>
                Soy-Free
              </option>
              <option onClick={() => setHealthLables("Fish-Free")}>
                Fish-Free
              </option>
              <option onClick={() => setHealthLables("Shellfish-Free")}>
                Shellfish-Free
              </option>
            </select>
          </div>
          <div className="app_icon ">
            <button className="profile_icon icon">
              <Link to="/Profile">
                <img src="https://avatars.githubusercontent.com/u/78645691?s=96&v=4" />
              </Link>
            </button>
            <span className="food_icon icon ">
              <img src={food} alt="arrow" />
            </span>
            <button className="logout icon" onClick={logout}>
              <h1>Logout</h1>
            </button>
          </div>
        </form>

        <div className="recipe_app">
          {isLoading ? (
            <SkeletonArticle />
          ) : !inputValue ? (
            <p className="app-refresh">
              Please find some other food recipes you like
            </p>
          ) : (
            recipes
              .filter((recipe_) => {
                if (caloriesFilterValue == 1) {
                  return recipe_?.recipe.calories < 10000;
                } else if (caloriesFilterValue == 2) {
                  return recipe_?.recipe.calories < 1000;
                } else if (caloriesFilterValue == 3) {
                  return recipe_?.recipe.calories < 2000;
                } else if (caloriesFilterValue == 4) {
                  return recipe_?.recipe.calories < 10000;
                } else {
                  return true;
                }
              })
              .map((recipes, key) => {
                return <RecipeTile recipes={recipes} key={key} />;
              })
          )}
        </div>
      </div>
    </AppWrapperTile>
  );
}

export default App;
