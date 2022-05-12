import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
const ProfileWrapperTile = styled("div")`
.data{
    background-color:#d9c7c7;
    margin: 10% 20%;
    height:20rem;
}

.data_entry{
    display:flex;
    justify-content: center;
    margin: 2rem;
}
.data_name{
    background-color: #d9c7c7;
    font-weight: 100;
    margin: 1% 0 0 25%;
}
.data_user{
  text-align:center;
  font-weight:100;
}
@media screen and (max-width: 1000px){
  .data{
    background-color:#d9c7c7;
    margin: 10% 5%;
    width: 30rem;
    height:350px;
}

.data_entry{
    margin: 14px;
}
.data_name{
    background-color: #d9c7c7;
    font-weight: 100;
    margin: 10px 0 0 50px;
}
.data_user{
  font-weight:100;
}
h1{
  font-size: 1.5rem;
}
}
`;

const Profile = () => {
const [ userData, setUserData] = useState(null)
const location = useLocation()
console.log("profile hook",location)
useEffect(() => {
   let storage = localStorage.getItem("Name")
   console.log(JSON.parse(storage))
   setUserData(JSON.parse(storage))
},[])

  return (
    <ProfileWrapperTile>
      <div className="data">
        <h1 className="data_user">USER INFORMATION</h1>
        <h1 className="data_name">name :{userData?.name}</h1>
        <h1 className="data_name">age : {userData?.age}</h1>
        <h1 className="data_name">gender :{userData?.gender}</h1>
        <h1 className="data_name">email : {userData?.email}</h1>
        <h1 className="data_name">password : {userData?.Password}</h1>
      </div>
    </ProfileWrapperTile>
  );
};

export default Profile;
