import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Sign up</h1>
      <div>
        <label>Username</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>password</label>
        <input
          type="password"
          name="password"
        />
      </div>
      <button>Submit</button>
    </div>
  );
};

export default Home;
