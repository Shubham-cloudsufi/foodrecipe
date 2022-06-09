import React from "react";
import styled from "styled-components";

const RecipeWrapperTile = styled("div")`

  html{
    font-size:16px;
  }
  .recipe {
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    margin:1.2rem 0.2rem 0 7.5rem;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
  }
  .recipe_img {
    border-radius: 0.5rem 0.5rem 0px 0px;
    width: 20.5rem;
    height: 15rem;
    margin-left: 0;
    margin-top: auto;
  }
  .recipe_img:hover {
    transition: all 1s;
  }
  .recipe__box {
    width: 20.5rem;
    display: grid;
    height: 23rem;
    box-shadow: rgba(51, 89, 128, 0.2) 0px 8px 24px;
  }
  .recipe__box:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
  .recipe_label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding:0.8rem;
    text-align: left;
    background-color: rgb(180, 167, 238);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
    color: rgb(15, 14, 14);
    margin: 0 0 0 0px;
    text-transform: uppercase;
    background-color: rgb(251, 251, 251);
  }

  .recipe_dishtype {
    display: flex;
    justify-content: center;
    font-size: 1rem;
    max-width: 5rem;
    padding: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 0.5rem;
    font-weight: 400;
    align-items: center;
    background: #3a913f;
    color: #ffffff;
  }
  .recipe_dishtype::first-letter{
    text-transform: uppercase;
  }
  
  p::first-letter {
    text-transform: uppercase;
    font-size: 1.1rem;
  }

  .recipe_url {
    padding: 0.5rem 7rem;
    margin-top: 1rem;
    display: flex;
    background-color: #6c63ff;
    color: white;
    text-decoration: none;
  }
  .recipe_calories{
    padding: 0;
    margin: 0;
  }
  .recipe_url:hover {
    background-color: rgb(61, 37, 133);
    transition: all 1s;
    color: white;
  }
  .app_arrow {
    margin-left: -1.2rem;
  }
  .span__calories {
    font-size: 1.1rem;
    margin-left: 0.5rem;
    font-weight: 400;
    padding-right: 12rem;
    color: rgb(139, 154, 70);
  }

`;

const RecipeTile = ({ recipes }) => {
  return (
    <RecipeWrapperTile className="recipeWrapperTile">
      <div className="recipe">
        <div className="recipe__box ">
          <img alt="img" loading="lazy" className="recipe_img" src={recipes["recipe"]["image"]}></img>
          <p className="recipe_label">{recipes["recipe"]["label"]}</p>
          <div className="recipe_dishtype">{recipes["recipe"]["dishType"]} </div>
          <div className="recipe_inline">
            <p className="recipe_calories">
              <span className="span__calories">calories</span> 
              {parseFloat(recipes["recipe"]["calories"]).toFixed(2)}{" "}
            </p>
            <a
              type="text"
              rel="newpage"
              target="_blank"
              className="recipe_url"
              href={recipes["recipe"]["url"]}
            >
              LOOK RECIPE
            </a>
          </div>
          <div>
            {/* <span className="arrow ">
              <img src={outside} alt="arrow" />
            </span> */}
          </div>
        </div>
      </div>
    </RecipeWrapperTile>
  );
};

export default RecipeTile;
