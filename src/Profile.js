import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as GmailIcon } from "./Icons/Gmail.svg";
import { ReactComponent as GenderIcon } from "./Icons/Gender.svg";
import { ReactComponent as AgeIcon } from "./Icons/Age.svg";
import { useLocation } from "react-router-dom";
const ProfileWrapperTile = styled("div")`
  .data {
    background-color: #8ece8e;
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
    margin-top: 5rem;
  }

  .data_tag {
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .data_name {
    margin-left: 9rem;
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

  .span_tag {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    padding: 5px;
    background-color: lightgreen;
    border-radius: 3px;
  }
  .gmail {
    margin: 8px 24px -12px 2px;
    width: 3rem;
    height: 3rem;
  }
  .gender {
    width: 3rem;
    margin: 8px 24px -12px 2px;
    height: 3rem;
  }
  .age {
    margin: 8px 24px -12px 2px;
    width: 3rem;
    height: 3rem;
  }
  .data_nametage {
    text-align: center;
    font-weight: 200;
    font-size: 2.5rem;
  }
  .name_gmail {
    padding: 0.8rem;
    text-align: center;
    font-weight: 200;
    font-size: 2rem;
  }
  .name_age {
    padding: 0.8rem;
    font-weight: 200;
    font-size: 2rem;
  }
  .name_gender {
    padding: 0.8rem;
    font-weight: 200;
    font-size: 2rem;
  }
  .name_password {
    padding: 0.8rem;
    font-weight: 100;
    font-size: 2rem;
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
          <div className="image_header">
            <img src="https://scontent.fdel11-1.fna.fbcdn.net/v/t1.18169-9/19553898_1378727368878597_7548345576742918565_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7ravwWrhzYQAX83G--z&_nc_ht=scontent.fdel11-1.fna&oh=00_AT-HhmbTAduaQqcSiif5zCceNCp-eQSS5XZI0lQi_okcsg&oe=62B2B80B" />
          </div>
        </div>
        <div className="all_data">
          <div className="data_tag">
            <div className="data_name_tag">
              <h1 className="data_nametage">{userData?.name}</h1>
              <h1 className="name_gmail">
                <GmailIcon className="gmail" />: {userData?.email}
              </h1>
            </div>

            <h1 className="name_age">
              <AgeIcon className="age" />: {userData?.age}(Age)
            </h1>
            <h1 className="name_gender">
              <GenderIcon className="gender" />:{userData?.gender}
            </h1>
            <h1 className="name_password">Password : *****</h1>
          </div>
        </div>
      </div>
    </ProfileWrapperTile>
  );
};

export default Profile;
