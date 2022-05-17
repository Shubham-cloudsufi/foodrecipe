import React from "react";
import error from "./Icons/PageNotFound.svg";
import styled from "styled-components";

const ErrorWrapperTile = styled("div")`
img{
  margin:5rem 0 0 13rem ;
  height:50vh;
  width:70vw;
}
`

const ErrorPage = () => {
  return (
    <ErrorWrapperTile>
    <div className="error">
      <img alt="error" src={error} />
    </div>
    </ErrorWrapperTile>
  );
};

export default ErrorPage;
