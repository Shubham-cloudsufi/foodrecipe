import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
const ProfileWrapperTile = styled("div")`
  .data {
    background-color: #d9c7c7;
    /* position: absolute;
    top: 10%;
    align-items: center;
    text-align: center;
    width: 100%; */
    height: 32rem;
  }

  /* .image_profile{
    position: absolute;
    border-radius: 50%;
    z-index: 1;
    top: 3rem;
    right: 39rem;
  } */

  .profile_header {
    background-color: white;
    height: 6rem;
  }

  .image_header img {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
  }
  .image_header {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 3.6rem;
  }

  .all_data {
    /* position: absolute; */
    /* background-color: #d9c7c7; */
    width: 100%;
    top: 2rem;
    display: flex;
    /* flex-wrap: wrap; */
    height: 52%;
    margin: 0px 60px;
    flex-direction: column;
  }

  .data_tag {
    padding: 4rem 0 0 0;
    /* width: 100%; */
  }

  /* .data_entry {
    display: flex;
    justify-content: center;
    margin: 2rem;
  } */
  .data_name {
    background-color: #d9c7c7;
    font-weight: 100;
    display: grid;
    padding: 1rem 0 0 0;
    text-align: left;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 10%;
  }
  .data_user {
    /* position: absolute;
    width: 100%;
    text-align: center; */
    font-weight: 100;
    /* width: 100%; */
    margin: 0% 0 0 2%;
  }
  @media screen and (max-width: 1000px) {
    /* .data {
    background-color: #d9c7c7;
    margin: 12% 20%;
    height: 26rem;
    width: 50rem;
    display: flex;
    flex-flow: wrap;
    } */

    .image_profile {
      right: 20rem;
    }
    /* .data_entry {
      margin: 14px;
    } */
    /* .data_name {
      background-color: #d9c7c7;
      font-weight: 100;
      margin: 10px 0 0 50px;
    } */
    /* .data_user {
      font-weight: 100;
    }
    h1 {
      font-size: 1.5rem;
    } */
  }
  @media screen and (max-width: 500px) {
    /* .data {
      margin: 19% 20%;
      width: 74%;
      height: 62%;
    }
    .data_entry {
      margin: 14px;
    } */
    /* .data_name {
      background-color: #d9c7c7;
      font-weight: 100;
      margin: 10px 0 0 50px;
    } */
    /* .data_user {
      font-weight: 100;
    }
    
    h1 {
      font-size: 1.5rem;
    } */
    .image_profile {
      right: 8rem;
    }
  }
`;

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const location = useLocation();
  console.log("profile hook", location);
  useEffect(() => {
    let storage = localStorage.getItem("Name");
    console.log(JSON.parse(storage));
    setUserData(JSON.parse(storage));
  }, []);

  return (
    <ProfileWrapperTile>
      <div className="data">
        <div className="profile_header">
          {/* <h1 className="data_user">USER INFORMATION</h1> */}
          <div className="image_header">
            <img src="https://avatars.githubusercontent.com/u/78645691?s=96&v=4" />
          </div>
        </div>
        <div className="all_data">
          <div className="data_tag">
            <h1 className="data_name">NAME :{userData?.name}</h1>
            <h1 className="data_name">EMAIL : {userData?.email}</h1>
            <h1 className="data_name">AGE : {userData?.age}</h1>
            <h1 className="data_name">GENDER :{userData?.gender}</h1>
            <h1 className="data_name">PASSWORD : {userData?.Password}</h1>
          </div>
        </div>
      </div>
    </ProfileWrapperTile>
  );
};

export default Profile;
