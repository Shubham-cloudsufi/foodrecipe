import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import RecipeTile from "./RecipeTile";
import './RecipeTile.css'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

function App() {
  const [food, setfood] = useState("");
  const [recipe, setrecipe] = useState([]);
  var url = `https://api.edamam.com/search?q=${food}&app_id=45918ea0&app_key=%203a2b8ca91fd63b1240eaffc66c36f0a0&from=0&to=20&calories=591-722&health=alcohol-free`;

  async function getRecipes(e) {
    var result = await Axios.get(url);
    setrecipe(result.data.hits);
    console.log(result.data);
    e.preventDefault()
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      {/* <h1>FOOD SITE</h1> */}
      <form className="app_form" onSubmit={onSubmit}>
        <input
          id="search"
          type="text"
          placeholder="ENTER NAME"
          value={food}
          onChange={(e) => setfood(e.target.value)}
        />
        <button className="app_submit" type="submit" value="Search">
          Search
        </button>
      </form>
      <div className="recipe_app">
        {recipe.map((recipe, key) => {
          return <RecipeTile key={key} recipe={recipe} />;
        })}
      </div>
      <Skeleton count={7} />
    </div>
  );
}

export default App;
