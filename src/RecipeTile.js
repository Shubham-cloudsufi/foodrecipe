import React from "react";
import "./RecipeTile.css";
import outside from "./Icons/outside.svg"
const RecipeTile = ({ recipe }) => {
  return (
    <div className="recipe">
      <div className="recipe__box ">
      {/* <div className="recipe_img skeleton"></div> */}
        <img className="recipe_img skeleton" src={recipe["recipe"]["image"]}>
        </img>
        <p className="recipe_label skeleton">{recipe["recipe"]["label"]}</p>
        <div className="recipe_inline">
          <p className="recipe_dishtype">{recipe["recipe"]["dishType"]} </p> 
          <a
            type="text"
            target="_blank"
            className="recipe_url "
            href={recipe["recipe"]["url"]}
          >
         VIEW RECIPE
          </a>
        </div>
          <div>
          <span className="arrow">
            <img src={outside} alt= "arrow" />
          </span>
          </div>
      </div>
    </div>
  );
};

export default RecipeTile;
