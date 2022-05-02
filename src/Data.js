import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DataWrapperTile = styled("div")`
.data{
    text-align:center;
    background-color:#d9c7c7;
    margin: 42px 189px;
    height:300px;
}
.data_entry{
    display:flex;
    justify-content: center;
    margin: 24px;
}
h1{
    background-color:#d9c7c7;
    font-weight:100;
}
`;

const Data = () => {
const [ userData, setUserData] = useState(null)

useEffect(() => {
   let storage = localStorage.getItem("Name") 
   console.log(JSON.parse(storage))
   setUserData(JSON.parse(storage))
},[])
  return (
    <DataWrapperTile>
      <div className="data">
        <h1>USER INFORMATION</h1>
        <h1>name :{userData?.name}</h1>
        <h1>age : {userData?.age}</h1>
        <h1>gender :{userData?.gender}</h1>
        <h1>profile : {userData?.profile}</h1>
      </div>
    </DataWrapperTile>
  );
};

export default Data;
