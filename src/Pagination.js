import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PaginateWrapperTile = styled("div")`
  .buttons_pagination {
    margin-top: 1rem;
    /* position: fixed; */
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
  }
  .next {
    padding:10px 1rem;
    margin: 5px;
    color: white;
    border: none;
    cursor:pointer;
    background-color: green;
    border-radius: 5px;
  }
  .hover_button:hover{
    color: green;
    background-color: white;
    border: 1px solid lightgreen;
  }

  @media screen and (max-width: 500px) {
    .buttons_pagination{
      margin-left: 7rem;
    }
  }
`;
const Pagination = ({ showPerPage, onPagination, total }) => {
  const [counter, setCounter] = useState(1);
  console.log(showPerPage);
  useEffect(() => {
    const value = showPerPage * counter;
    console.log("start value", value - showPerPage);
    console.log("end value", value);
    console.log("counter change");
    onPagination(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <PaginateWrapperTile>
      <div className="buttons_pagination">
        <button className="previous hover_button" onClick={() => onButtonClick("prev")}>
          Previous
        </button>
        <button className="next hover_button" onClick={() => onButtonClick("next")}>
          Next
        </button>
      </div>
    </PaginateWrapperTile>
  );
};

export default Pagination;
