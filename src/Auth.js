import React, { useState } from "react";
import styled from "styled-components";
import login from "./Icons/login.svg";

const NavWrapperTile = styled("div")`
  .header {
    display:flex;
    text-align: center;
    background-color: #e5dbdb;
    height: 450px;
    width: fit-content;
    margin: 3rem 13rem;
    font-weight: 400;
  }
  .user {
    padding: 15px;
  }
  h1 {
    font-weight: 100;
  }
  p{
    padding: 10px 0px 0 0 ;
  }
  input{
    margin: 10px 0px;
    padding:10px 10px;
    width:70%;
    border-radius:5px;
    border:1px solid #bfa0a0;
  }
  .login{
    padding:10px 50px;
    margin: 20px 0px;
    background-color: #bfa0a0;
    color:white;
    border:1px solid #bfa0a0;
    cursor:pointer;
  }

  .login:hover{
    background-color: white;
    color: #bfa0a0;
  }

  .login_img{
    width: 279px;
    height: 299px;
    margin: 84px 0px 0px 40px;
    ${'' /* background-color: yellowgreen; */}
  }
  .input_data{
    margin: 90px 0px 0px 40px;
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
    localStorage.setItem("login", true)
  };
  
  return (
    <NavWrapperTile>
      <div className="header">
      <img alt="login" className="login_img" src={login} />
        {/* <p>NAME:</p> */}
        <div className="input_data"> 
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <p>AGE:</p> */}
        <input
          type="number"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {/* <p>GENDER:</p> */}
        <input
          placeholder="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        {/* <p>PROFILE:</p> */}
        <input
          type="url"
          placeholder="profile"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        />
        <div>
          <button className="login"  onClick={handle}>Login</button>
        </div>
        </div>
      </div>
    </NavWrapperTile>
  );
};

export default Auth;
