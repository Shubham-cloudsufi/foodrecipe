import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const FooterWrapperTile = styled("div")`
.Footer_header{
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: white;
}
p{
    font-weight: 100;
}
.loactaion_foot{
    margin-top: 5rem;
}
.loactaion_profile{
    margin-top: -2rem;
    background-color: white;
}

.footer_profile{
    background-color: white;
}

@media screen and (max-width: 453) {
    .loactaion_profile{
        /* margin-top: -1rem; */
    }
}
`;

const Footer = () => {

    const location =useLocation();

  return (
    <FooterWrapperTile>
      <div className="Footer_header">
        {location.pathname === "/auth" ? <p>ALL COPYRIGHT RESERVED @2022</p> : null }
        <div className="footer_profile">
        {location.pathname === "/Profile" ? <p className="loactaion_profile">ALL COPYRIGHT RESERVED @2022</p> :null }
        </div>
        {location.pathname === "/app" ? <p className="loactaion_foot">ALL COPYRIGHT RESERVED @2022</p> :null }
      </div>
    </FooterWrapperTile>
  );
};

export default Footer;
