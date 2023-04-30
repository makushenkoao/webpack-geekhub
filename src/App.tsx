import React from "react";
import Counter from "./components/Counter/Counter";
import "./index.scss";
import UserAvatarIcon from "./shared/icons/user.svg";
import userAvatarIcon from "./shared/icons/user.png";

const App = () => {
  return (
    <div>
      Hello world
      <img src={userAvatarIcon} alt="user" />
      <UserAvatarIcon />
      <Counter />
    </div>
  );
};

export default App;
