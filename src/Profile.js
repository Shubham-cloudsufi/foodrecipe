import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
const ProfileWrapperTile = styled("div")`
  .data {
    background-color: #d9c7c7;
    height: 36rem;
  }

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
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    /* background-color: aquamarine; */
    margin-top: 3rem;
  }

  .data_tag {
    /* background-color: blue; */
    width: 50rem;
  }

  .data_name {
    /* background-color: green; */
    font-weight: 100;
    padding: 1rem;
  }
  .data_user {
  }
  @media screen and (max-width: 1000px) {
  
    .image_profile {
      right: 20rem;
    }
  
  }
  @media screen and (max-width: 500px) {
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
