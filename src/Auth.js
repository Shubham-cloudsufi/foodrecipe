import React, { useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as LoginPageSvg } from "./Icons/Login.svg";
import { useNavigate } from "react-router-dom";

const NavWrapperTile = styled("div")`
  .header {
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: #cbf078;
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
    outline: none;
    margin: 10px 0px;
    padding: 10px 10px;
    /* width: 70%; */
    border-radius: 5px;
    border:1px solid green;
  }
  .login {
    padding: 10px 50px;
    margin: 20px 0px;
    background-color: var(--main-button-color);
    color: white;
    border: 1px solid #31e02d;
    cursor: pointer;
    border-radius: 5px;
  }

  .login:hover {
    background-color: var(--main-buttonhover-color);
    color: #bfa0a0;
  }

  .login_img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25rem;
    width: 30rem;
    margin-top: 2rem;
    .login_icon_first {
      fill: green;
    }
    .login_icon_second {
      fill: green;
    }
    .login_icon_third {
      fill: #f8f398;
    }
    .login_icon_fourth {
      fill: #f1b963;
    }
  }
  .input_data {
    margin: 6rem 0 0 0;
    display: flex;
    flex-direction: column;
  }

  .radio_button {
    background-color: white;
    border: 1px solid green;
    margin: 8px 0;
    border-radius: 5px;
    padding: 8px 10px 8px 9px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .radio_button_p{
    /* margin: -12px 0px 0px -4.5rem; */
    color: grey;
  }

  .input_gender{
    width: 70px;
    padding: 0 0 0 0;
    margin: 0;
  }

  @media screen and (max-width: 700px) {
    .login_img{
      display: none;
    }
    .radio_button {
      padding: 7px 7px 7px 24px;
  }
  .radio_button_p{
    /* margin: -12px 0px 0px -1.5rem; */
    color: grey;
    /* width: 5rem; */
    padding: 0;
    margin: 0 0px 0 -14px;
  }
  }
  @media screen and (max-width: 800px) {
    .radio_button {
   /* display: flow-root; */
  }
  }
`;
const Auth = ({ handleLogin }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState();
  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  console.log("iside auth");

  function onChangeValue(event) {
    setGender(event.target.value);
    console.log(event.target.value);
  }

  function onSubmit(e){
    // e.preventDefault();
    handleLogin({ name, age, gender, Password, email });
    // console.log("Email value:" + emailRef.current.value )
    // console.log("Password value:" + passwordRef.current.value )
  }


  return (
    <NavWrapperTile>
      <form className="header" onSubmit={onSubmit}>
        <LoginPageSvg className="login_img" />
        <div className="input_data">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          {/* <p>GENDER:</p> */}
          
            <div className="radio_button" onChange={onChangeValue}>
            <span className="radio_button_p">Gender</span>
              <input
                type="radio"
                value="Male"
                className="input_gender"
                name="gender"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              <span>Male</span>
              <input
                type="radio"
                value="Female"
                className="input_gender"
                name="gender"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              <span> Female</span>
            </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          required
          />
          {/* <p>PROFILE:</p> */}
          <input
            type="password"
            placeholder="Password"
            value={Password}
             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div>
            <button
              className="login"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </NavWrapperTile>
  );
};

export default Auth;
