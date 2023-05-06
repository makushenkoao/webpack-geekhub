import { useState } from "react";
import { Button } from "ui/Button";
import { LoginModal } from "modules/AuthByEmail";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData } from "modules/CurrentUser/model/selectors/getUserAuthData";
import { currentUserActions } from "modules/CurrentUser";

export const MainPage = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState<boolean>(false);

  const currentUser = useSelector(getUserAuthData);

  const onLogout = () => {
    dispatch(currentUserActions.logout());
  };

  const onClose = () => {
    setShow(false);
  };

  const onOpen = () => {
    setShow(true);
  };

  return (
    <div>
      <h1>Main page</h1>
      {currentUser ? (
        <>
          <p>Hello, {currentUser.username}</p>
          <Button onClick={onLogout}>Logout</Button>
        </>
      ) : (
        <Button onClick={onOpen}>Login</Button>
      )}
      <LoginModal show={show} onClose={onClose} />
    </div>
  );
};
