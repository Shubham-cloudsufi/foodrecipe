import React, { useEffect, useState } from "react";
import App from "./App";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from "./Navbar";
import Auth from "./Auth";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
// import Footer from "./Footer";

const Path = () => {
  
  const local = localStorage.getItem("login");

  const [isAuthenticate, setAuthenticate] = useState(local);
  useEffect(() => {
    setAuthenticate(local);
    console.log(local);
  }, [local]);



  const handleLogin = ({ name, age, gender, Password , email }) => {
    
    localStorage.setItem(
      "Name",
      JSON.stringify({ name, age, gender, Password , email })
    );
    setAuthenticate(true);
    // auth();
    localStorage.setItem("login", true);
    // navigate("/app");
  };

  // useEffect(() => {
    // const isAuthenticate1 = localStorage.getItem("login");
    // isAuthenticate1 ? setAuthenticate(true) : setAuthenticate(false);
    // console.log(" isAuthenticate1",isAuthenticate1)
  // }, []);

  console.log("LOCAL", local);
  
  // useEffect(() => {
  //   localStorage.setItem("login", isAuthenticate);
  // }, [isAuthenticate]);

  // console.log("path",isAuthenticate);

  return (
    <div>
      <Router basename="/foodrecipe">
        <Navbar setAuthenticate={setAuthenticate} />
        <Routes>
          <Route
            path="/foodrecipe"
            element={
              isAuthenticate ? (
                <Navigate to="/app" />
              ) : (
                <Auth  handleLogin={handleLogin}/>
              )
            }
          />
          <Route
            path="/"
            element={
              isAuthenticate ? (
                <Navigate to="/app" />
              ) : (
                <Auth handleLogin={handleLogin}  />
              )
            }
          />
          <Route
            path="/auth"
            element={
              isAuthenticate ? (
                <Navigate to="/app" />
              ) : (
                <Auth handleLogin={handleLogin}  />
              )
            }
          />
          <Route
            exact
            path="/app"
            element={
              isAuthenticate ? (
                <App  logoutx={() => setAuthenticate(false)} />
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route
            exact
            path="/profile"
            element={isAuthenticate ? <Profile /> : <Navigate to="/auth" />}
          />
          <Route
            exact
            path="/app/auth"
            element={<Navigate to={isAuthenticate ? "/app" : "/auth"} />}
          />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default Path;
