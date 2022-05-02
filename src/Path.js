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
import Data from "./Data";

const Path = () => {
  const [isAuthenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    const isAuthenticate1 = localStorage.getItem("login");
    isAuthenticate1 ? setAuthenticate(true) : setAuthenticate(false);
    // console.log(isAuthenticate1)
  }, []);

  useEffect(() => {
    localStorage.setItem("login", isAuthenticate);
  }, [isAuthenticate]);

  // console.log(isAuthenticate)

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          {!isAuthenticate && (
            <Route
              path="/auth"
              element={<Auth auth={() => setAuthenticate(true)} />}
            />
          )}

          {isAuthenticate && (
            <>
              <Route
                exact
                path="/app"
                element={<App logoutx={() => setAuthenticate(false)} />}
              />
              <Route exact path="/data" element={<Data />} />
            </>
          )}

          <Route
            exact
            path="*"
            element={<Navigate to={isAuthenticate ? "/app" : "/auth"} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default Path;
