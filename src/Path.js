import React, { useEffect, useState } from "react";
import App from "./App";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Navbar";
import Auth from "./Auth";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";

const Path = () => {
  const [isAuthenticate, setAuthenticate] = useState(
    localStorage.getItem("login")
  );

  useEffect(() => {
    const isAuthenticate1 = localStorage.getItem("login");
    isAuthenticate1 ? setAuthenticate(true) : setAuthenticate(false);
    console.log(" isAuthenticate1",isAuthenticate1)
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("login", isAuthenticate);
  // }, [isAuthenticate]);

  console.log(isAuthenticate);

  return (
    <div>
      <Router>
       <Navbar /> 
        <Routes>
        <Route
            path="/foodrecipe"
            element={
              isAuthenticate ? (
                <Navigate to="/app" />
              ) : (
                <Auth auth={() => setAuthenticate(true)} />
              )
            }
          />
        <Route
            path="/"
            element={
              isAuthenticate ? (
                <Navigate to="/app" />
              ) : (
                <Auth auth={() => setAuthenticate(true)} />
              )
            }
          />
          <Route
            path="/auth"
            element={
              isAuthenticate ? (
                <Navigate to="/app" />
              ) : (
                <Auth auth={() => setAuthenticate(true)} />
              )
            }
          />
          <Route
            exact
            path="/app"
            element={
              isAuthenticate ? (
                <App logoutx={() => setAuthenticate(false)} />
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
      </Router>
    </div>
  );
};

export default Path;
