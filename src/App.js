import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import RecipeTile from "./RecipeTile";
import axios from "axios";
import { ReactComponent as SearchBackground } from "./Icons/NoResultIcon.svg";
import SkeletonArticle from "./SkeletonArticle";
import { debounce } from "lodash";
import Pagination from "./Pagination";
const AppWrapperTile = styled("div")`
  .app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2.8rem;
    /* margin-bottom: 1.5rem; */
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


  .scroll {
    width: 70rem;
    height: 28rem;
    overflow-x: hidden;
    text-align: justify;
  }
  .app_form {
    background-color: var(--main-bg-color);
    margin: 0 auto;
    width: 100%;
    position: fixed;
    height: 5rem;
    right: 0rem;
    top: 57px;
    outline: none;
  }
  #search {
    outline: none;
    border: 1px solid #54b248;
    /* width: 60%; */
    height: 2.3rem;
    border-right: none;
    border-radius: 0.5rem 0 0 0.5rem;
    padding-left: 1rem;
  }
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
    background-color: var(--main-button-color);
    color: white;
    width: 5.2rem;
    height: 2.45rem;
    border-radius: 0px 0.4rem 0.4rem 0;
    cursor: pointer;
    justify-content: center;
    align-items: center;
  }
  .app_submit:hover {
    background-color: var(--main-buttonhover-color);
    transition: all 0.5s;
  }

  .app_submit:disabled {
    opacity: 0.5;
  }

  .app_submit:enabled {
    background-color: var(--main-buttonhover-color);
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
    /* margin-left: 3rem; */
    width: 100%;
  }

  .search_food {
    text-align: center;
    margin-top: 4rem;
  }
  .noresult_icon {
    width: 20rem;
    height: 10rem;
    margin: 0rem 0 0 0rem;
    margin-top: 5.8rem;
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
    .scroll {
      width: 46rem;
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
    .scroll {
      width: 23rem;
      height: 35rem;
      margin-left: 7.5rem;
    }
  }

  @media screen and (max-width: 1000px) {
    .app {
      box-sizing: border-box;
    }
  }

  @media screen and (max-width: 500px) {
    .input_button_search {
      display: table-column;
    }
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
    margin: 0rem 0 0 1rem;
  }

  .input_button_search {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .input_trans {
    display: flex;
  }
  .pagination {
    width: 100%;
    height: 2rem;
    background-color: green;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 20px;
    list-style: none;
    border: solid 1px lightgreen;
    color: white;
    margin-top: 5rem;
  }
  .page_item {
    background-color: green;
    color: white;
  }
  .page_link {
    padding: 5px 25px;
    background-color: firebrick;
    border: solid 1px white;
    border-radius: 5px;
  }
  .prev_item {
    padding: 5px 25px;
    background-color: red;
    border: solid 1px lightgreen;
    border-radius: 5px;
  }
  .next_item {
    padding: 5px 25px;
    background-color: red;
    border: solid 1px lightgreen;
    border-radius: 5px;
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
  const [showPerPage, setShowPerPage] = useState(9);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const [from , setFrom] =useState(0)
  const [to , setTo] = useState(9)

  var url = `https://api.edamam.com/search?q=${inputValue}&app_id=45918ea0&app_key=${process.env.REACT_APP_API}&from=${from}&to=${to}&calories=591-722&health=${healthLables}`;

  useEffect(() => {
    if(inputValue){
      getRecipes()
    }
    console.log("iside app");
  }, [from,to]);
  
  console.log("localstorage", localStorage.getItem("login"));


  const onPagination = (start, end) => {
    console.log(start, end);
    setPagination({ start, end });
  };

  function getRecipes() {
    setloading(true);
    axios
      .get(url)
      .then((result) => {
        setrecipes([...result.data.hits]);
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
  // const debounce = function (fn, d) {
  //   // let timer;
  //   return function () {
  //     let context = this,
  //       args = arguments;
  //     clearTimeout(timer);
  //     let timer = setTimeout(() => {
  //       fn.apply(context, args);
  //     }, d);
  //   };
  // };

  // const deb = useCallback(
  //   debounce((text) => setInputValue(text), 3000),
  //   []
  // );

  // const handleInput = debounce((text) => {
  //   setInputValue(text);
  // }, 1000);

  //   const handleText = (text) =>{
  //     deb();
  //     console.log("text",text)
  // }

  // const handlePageClicked = (data) => {
  //   console.log(data.selected);
  // };
  
  const scrollToTop = () => {
    document.getElementById("scroller").scroll({top : 0,behavior:"smooth"})
  };

  const enterValue = (e) => {
    setInputValue(e.target.value);
    setEnable(e.target.value);
  };

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
            <div className="input_trans">
            {/* {from} -- {to} */}
              <input
                id="search"
                type="text"
                className="input_search"
                placeholder="ENTER NAME"
                value={inputValue}
                onChange={enterValue}
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
                  <option onClick={() => setHealthLables("Vegan")}>
                    Vegan
                  </option>
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
        {inputValue ? <div id="scroller" className="recipe_app scroll">
          {isLoading ? (
            <SkeletonArticle  />
          ) : !inputValue ? null : (
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
              .slice(pagination.start, pagination.end)
              .map((recipes, key) => {
                return <RecipeTile recipes={recipes} key={key} />;
              })
          )}
        </div> : null}
        
        {inputValue ? (
          <Pagination
            showPerPage={showPerPage}
            onPagination={onPagination}
            total={recipes.length}
            setFrom ={setFrom}
            setTo ={setTo}
            scrollToTop= {scrollToTop}
          />
        ) : null}
      </div>
      {console.log("-----",from)}
    </AppWrapperTile>
  );
}

export default App;
