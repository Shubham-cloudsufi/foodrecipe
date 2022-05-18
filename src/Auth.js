import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as LoginPageSvg } from "./Icons/Login.svg";
import { useNavigate } from "react-router-dom";

const NavWrapperTile = styled("div")`
  .header {
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: #e3ceb9;
    /* margin: 5% 8% 5% 8%; */
    /* margin: 4rem 4rem; */
    font-weight: 400;
    height: 30rem;
    margin-top: 5rem;
  }
  .user {
    padding: 15px;
  }
  h1 {
    font-weight: 100;
  }
  p {
    padding: 10px 0px 0 0;
  }
  input {
    margin: 10px 0px;
    padding: 10px 10px;
    width: 70%;
    border-radius: 5px;
    border: 1px solid #bfa0a0;
  }
  .login {
    padding: 10px 50px;
    margin: 20px 0px;
    background-color: #bfa0a0;
    color: white;
    border: 1px solid #bfa0a0;
    cursor: pointer;
  }

  .login:hover {
    background-color: white;
    color: #bfa0a0;
  }

  .login_img {
    display: flex;
    justify-content: center;
    align-items: center;
    .login_icon_first{
      fill: lightgreen;
    }
    .login_icon_second{
      fill: lightgreen;
    }
    .login_icon_third{
      fill: skyblue;
    }
    .login_icon_fourth{
      fill: #C4A484;
    }
  }
  .input_data {
    margin:6rem 0 0 0;
  }
  @media screen and (max-width: 1000px) {
    /* .header {
      margin: 18% 8% 8% 8%;
    } */

    /* .login_img {
      margin: 20% 0 0 5%;
    } */
  }
  @media screen and (max-width: 500px) {
    /* .header {
      margin: 28% 8% 8% 8%;
    } */

    /* .login_img {
      margin: 50% 0 0 5%;
    } */
  }
`;
const Auth = ({  handleLogin }) => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  console.log("iside auth");

  const navigate = useNavigate();

  return (
    <NavWrapperTile>
      <div className="header">
        <LoginPageSvg className="login_img" />
        {/* <img alt="login" className="login_img" src={login} /> */}
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
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {/* <p>GENDER:</p> */}
          <input
            type="text"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <p>PROFILE:</p> */}
          <input
            type="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button
              className="login"
              onClick={() => {
                
                handleLogin({ name, age, gender, Password, email });
                navigate("/app");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </NavWrapperTile>
  );
};

export default Auth;
