import React, { useState,useEffect } from "react";
import "./App.css";
import Axios from "axios";
import RecipeTile from "./RecipeTile";
function App() {
  const [food, setfood] = useState("");
  const [recipe, setrecipe] = useState([]);
  var url = `https://api.edamam.com/search?q=${food}&app_id=45918ea0&app_key=%203a2b8ca91fd63b1240eaffc66c36f0a0&from=0&to=10&calories=591-722&health=alcohol-free`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipe(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1>FOOD SITE</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="app_input"
          placeholde="enter ingridient"
          value={food}
          onChange={(e) => setfood(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      <div className="recipe_app">
        {recipe.map((recipe, key) => {
          return <RecipeTile key={key} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
