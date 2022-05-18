import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RecipeTile from "./RecipeTile";
import axios from "axios";
import { ReactComponent as SearchBackground } from "./Icons/NoResultIcon.svg";
import SkeletonArticle from "./SkeletonArticle";

const AppWrapperTile = styled("div")`
  .app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8.8rem;
    margin-right: 6rem;
    margin-bottom: 6.2rem;
    box-sizing: border-box;
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
    height: 8.7rem;
    right: 0rem;
    top: 57px;
    outline: none;
  }
  #search {
    border: 1px solid #0a0bdb;
    width: 25%;
    height: 2.3rem;
    border-radius: 0.5rem 0 0 0.5rem;
    padding-left: 1rem;
    margin: -4px;
  }
  /* input:enabled{
    color: aqua;
  } */
  .cal {
    font-weight: 100;
    background-color: white;
    color: black;
    margin-top: 0.3rem;
    position: absolute;
    display: inline;
    text-align: center;
    align-items: center;
    padding: 0 0.5rem;
    border-radius: 10px;
    margin-top: 2.2rem;
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
    background-color: #6c63ff;
    color: white;
    display: flex;
    width: 5.2rem;
    height: 2.45rem;
    border-radius: 0px 0.4rem 0.4rem 0;
    cursor: pointer;
    justify-content: center;
    align-items: center;
  }
  .app_submit:hover {
    background-color: rgb(22, 22, 240);
    transition: all 0.5s;
  }

  .app_submit:disabled{
    background-color: grey;
  }

  .app_submit:enabled{
    background-color: #6c63ff;
  }

  .app_refresh {
    display: flex;
    width: 25rem;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 0rem 9rem;
  }

  .app_refresh_p {
    margin-top: 0rem;
    margin-left: 3rem;
    width: 100%;
  }

  .search_food {
    text-align: center;
    margin-top: 4rem;
  }
  .noresult_icon {
    width: 20rem;
    height: 10rem;
    margin: 0rem 0 0 6rem;
    right: 0;
    .noresult_icon_first {
      fill: yellow;
    }
    .noresult_icon_second {
      fill: red;
    }
    .noresult_icon_third {
      fill: orange;
    }
    .noresult_icon_fourth {
      fill: orange;
    }
    .noresult_icon_fifth {
      fill: white;
    }
  }

  @media screen and (max-width: 1000px) {
    .recipe_app {
      display: flex;
      display: grid;
      grid-template-columns: 240px 240px;
    }
    .buttons {
      justify-content: center;
    }
  }
  @media screen and (max-width: 500px) {
    .recipe_app {
      display: grid;
      grid-template-columns: 15rem;
    }
    #search {
      left: 10%;
      width: 70%;
    }
  }

  @media screen and (max-width: 1000px) {
    .app {
      box-sizing: border-box;
    }
  }

  @media screen and (max-width: 500px) {
    .recipe_app {
      display: grid;
      grid-template-columns: 240px;
    }
    .app {
      box-sizing: border-box;
      margin-right: 7rem;
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
    border: 1px solid rgb(62, 62, 82);
    height: 2.2rem;
    border-radius: 0.3rem;
    cursor: pointer;
    width: 5rem;
    margin-right: 1rem;
  }
  .app_healthlable {
    width: 5rem;
    border: 1px solid rgb(62, 62, 82);
    height: 2.2rem;
    border-radius: 0.3rem;
  }
  .buttons {
    display: flex;
    justify-content: center;
    top: 1rem;
    height: 4.3rem;
    margin: 1rem 0 1% 1%;
  }
  .input_button_search {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    height: auto;
    justify-content: center;
    text-align: center;
  }
`;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [isLoading, setloading] = useState(false);
  const [caloriesFilterValue, setCaloriesFilterValue] = useState();
  const [visibleHeader, setVisibleHeader] = useState(false);
  const [headertext, setHeaderText] = useState("");
  const [healthLables, setHealthLables] = useState("vegan");
  const [notEnable, setEnable] = useState("");

  var url = `https://api.edamam.com/search?q=${inputValue}&app_id=45918ea0&app_key=${process.env.REACT_APP_API}&from=0&to=40&calories=591-722&health=${healthLables}`;

  useEffect(() => {
    console.log("iside app");
  }, []);

  console.log("localstorage", localStorage.getItem("login"));

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
    // alert(`please enter some value it's not ${notEnable} `)
  };

  function entervalue(e) {
    setInputValue(e.target.value);
    setEnable(e.target.value);
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
      <div className="app">
        <form className="app_form" onSubmit={onSubmit}>
          <div className="input_button_search">
            <input
              id="search"
              type="text"
              placeholder="ENTER NAME"
              value={inputValue}
              onChange={entervalue}
            />
            <button
              className="app_submit"
              disabled={!notEnable}
              type="submit"
              value="Search"
            >
              Search
            </button>
          </div>
          <div className="buttons">
            {inputValue && (
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
            )}
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
            {inputValue && (
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
            )}
          </div>
        </form>
        <div className="search_food">
          {inputValue ? null : <SearchBackground className="noresult_icon" />}
          {inputValue ? null : (
            <p className="app_refresh_p">
              Please find some other food recipes you like
            </p>
          )}
        </div>
        <div className="recipe_app">
          {isLoading ? (
            <SkeletonArticle />
          ) : !inputValue ? null  : (
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
