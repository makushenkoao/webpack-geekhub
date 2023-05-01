import React from "react";
import Counter from "modules/Counter/Counter";
import UserAvatarIcon from "assets/icons/user.svg";
import userAvatarIcon from "assets/icons/user.png";
import { Button } from "ui/Button";

const App = () => {
  return (
    <div>
      Hello world
      <img src={userAvatarIcon} alt="user" />
      <UserAvatarIcon />
      <Counter />
      <Button>123123</Button>
    </div>
  );
};

export default App;
