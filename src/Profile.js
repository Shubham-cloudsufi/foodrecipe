import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProfileWrapperTile = styled("div")`
.data{
    background-color:#d9c7c7;
    margin: 42px 189px;
    height:300px;
}

.data_entry{
    display:flex;
    justify-content: center;
    margin: 24px;
}
.data_name{
    background-color: #d9c7c7;
    font-weight: 100;
    margin: 10px 0 0 380px;
}
.data_user{
  text-align:center;
  font-weight:100;
}
`;

const Profile = () => {
const [ userData, setUserData] = useState(null)

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
        <h1 className="data_name">profile : {userData?.profile}</h1>
      </div>
    </ProfileWrapperTile>
  );
};

export default Profile;
