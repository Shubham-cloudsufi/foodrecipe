import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PaginateWrapperTile = styled("div")`
  .buttons_pagination {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
  .previous {
    padding: 10px 1rem;
    margin: 5px;
    color: white;
    border: none;
    cursor:pointer;
    background-color: green;
    border-radius: 5px;
    /* overflow: scroll; */
  }
  .next {
    padding:10px 1rem;
    margin: 5px;
    color: white;
    border: none;
    cursor:pointer;
    background-color: green;
    border-radius: 5px;
    /* overflow: scroll; */
  }
  .hover_button:hover{
    color: green;
    background-color: white;
    border: 1px solid lightgreen;
  }

  @media screen and (max-width: 500px) {
    .buttons_pagination{
      /* margin-left: 7.1rem; */
    }
  }
`;
const Pagination = ({setFrom , setTo ,scrollToTop}) => {

  // const scrollToTop = () => {
  //   // window.scrollTo(0,-100)
  //   document.getElementById("scroller").scrollTo(0,0)
  // };

  const onButtonClick = (type) => {
    if (type === "prev") {
        setFrom(prevState => prevState -10)
        setTo(prevState => prevState -10)
      }
    else if(type === "next") 
    {
        setFrom(prevState => prevState +10)
        setTo(prevState => prevState +10)
      }
  };

  return (
    <PaginateWrapperTile>
      <div  className="buttons_pagination" onClick={scrollToTop}>
        <button className="previous hover_button" onClick={() => {onButtonClick("prev")
        scrollToTop()}}>
          Previous
        </button>
        <button  className="next hover_button" onClick={() => {onButtonClick("next") 
        scrollToTop()}}>
          Next
        </button>
      </div>
    </PaginateWrapperTile>
  );
};

export default Pagination;
