import React, { useEffect } from "react";
import { MainPage } from "pages";
import { Counter } from "modules/Counter";
import UserAvatarIcon from "assets/icons/user.svg";
import userAvatarIcon from "assets/icons/user.png";
import { Button } from "ui/Button";
import { useDispatch } from "react-redux";
import { currentUserActions } from "modules/CurrentUser";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserActions.initCurrentUser());
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      {/*Hello world*/}
      {/*<img src={userAvatarIcon} alt="user" />*/}
      {/*<UserAvatarIcon />*/}
      {/*<Counter />*/}
      {/*<Button>123123</Button>*/}
      <MainPage />
    </div>
  );
};

export default App;
