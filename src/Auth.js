import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavWrapperTile = styled("div")`
  .header {
    text-align: center;
    background-color: #e5dbdb;
    height: 400px;
    margin: 60px 273px;
  }
  .user {
    padding: 15px;
  }
  h1 {
    font-weight: 100;
  }
`;
const Auth = ({ auth }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [profile, setProfile] = useState("");

  const handle = () => {
    localStorage.setItem("Name", JSON.stringify({name,age,gender,profile}));
    auth();
  };
  
  return (
    <NavWrapperTile>
      <div className="header">
        <p>Name:</p>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>age:</p>
        <input
          type="number"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>gender:</p>
        <input
          placeholder="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <p>profile:</p>
        <input
          type="url"
          placeholder="profile"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        />
        <div>
          <button onClick={handle}>Login</button>
        </div>
      </div>
    </NavWrapperTile>
  );
};

export default Auth;
