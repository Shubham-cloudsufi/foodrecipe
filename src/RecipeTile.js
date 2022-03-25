import React from "react";
import "./RecipeTile.css"
const RecipeTile = ({ recipe }) => {
  return (
    <div className="recipe">
      <img className="recipe_img" src={recipe["recipe"]["image"]} />
      <p className="recipe_label">{recipe["recipe"]["label"]}</p>
      <a className="recipe_url" href={recipe["recipe"]["url"]}>RECIPE</a>
      <p className="recipe_label">{recipe["recipe"]["dishType"]} </p>  
    </div>
  );
};

export default RecipeTile;
