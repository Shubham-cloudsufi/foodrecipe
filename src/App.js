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
    margin-right: 5rem;
    margin-bottom: 6.2rem;
  }
  .header {
    width: 19rem;
    text-align: center;
    margin: 0.25rem 0 0 -3.7rem;
    color: black;
    font-weight: 100;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
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
    top: 0px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    margin-left: 5rem;
    z-index: 2;
    outline: none;
  }
  #search {
    position: relative;
    border: 1px solid rgb(140, 141, 158);
    left: 28rem;
    top: -2.3rem;
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
    right: 30rem;
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

  @media screen and (max-width: 1200px) {
    .recipe_app {
      display: flex;
      display: grid;
      grid-template-columns: 240px 240px;
    }
    .app_form {
      display: flex;
      width: 50%;
      position: relative;
      left: 14rem;
      top: 0px;
      height: 3.1rem;
      margin-top: 1.8rem;
      bottom: 0px;
    }
    #search {
      left: 25rem;
      width: 27rem;
    }
    .app_submit {
      background-color: rgb(126, 126, 219);
      color: white;
      position: fixed;
      margin-right: -7.25rem;
    }
  }
  @media screen and (max-width: 700px) {
    .recipe_app {
      display: grid;
      grid-template-columns: 15rem;
    }
    .app_submit {
      right: 7.2rem;
    }
  }

  @media screen and (max-width: 500px) {
    .recipe_app {
      display: grid;
      grid-template-columns: 240px;
    }
    #search {
      left: 80px;
      width: 150px;
    }
    .app_submit {
      right: 155px;
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
    margin-top: -1.5rem;
    width: 100%;
  }
  .food_icon img {
    position: absolute;
    width: 4.3rem;
    height: 3.25rem;
    align-items: center;
    text-align: right;
    margin-top: 1.3rem;
    margin: -3.1rem 0 1.8rem 44rem;
  }
  .profile_icon img {
    position: absolute;
    width: 3rem;
    height: 3rem;
    align-items: center;
    text-align: right;
    margin-top: 1.3rem;
    margin: -4.1rem 0 1.8rem 40rem;
    border-radius: 50%;
    border: 1px solid grey;
  }

  .logout {
    font-weight: 100;
    margin: -2rem 0 1.8rem 49rem;
    position: absolute;
  }

  .logout h1 {
    font-weight: 100;
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

  var url = `https://api.edamam.com/search?q=${inputValue}&app_id=45918ea0&app_key=%203a2b8ca91fd63b1240eaffc66c36f0a0&from=0&to=40&calories=591-722&health=${healthLables}`;

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
    // localStorage.removeItem("Name")
    navigate("auth");
    localStorage.clear()
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
          <button className="profile_icon">
            <Link className="profile" to="/Profile">
              <img src="https://avatars.githubusercontent.com/u/78645691?s=96&v=4" />
            </Link>
          </button>
          <span className="food_icon">
            <img src={food} alt="arrow" />
          </span>
          <button className="logout" onClick={logout}>
            <h1>Logout</h1>
          </button>
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
