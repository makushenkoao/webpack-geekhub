import { useDispatch, useSelector } from "react-redux";
import { FC, FormEvent } from "react";

import { Input } from "ui/Input";
import { Button } from "ui/Button";
import { loginActions } from "modules/AuthByEmail/model/slice/loginSlice";
import { getLoginError } from "modules/AuthByEmail/model/selectors/getLoginError";
import { getLoginIsLoading } from "modules/AuthByEmail/model/selectors/getLoginIsLoading";
import { getLoginFormData } from "modules/AuthByEmail/model/selectors/getLoginFormData";
import { loginByEmail } from "modules/AuthByEmail/model/services/loginByEmail";
import { useAppDispatch } from "store";

interface LoginFormProps {
  onSuccessfulLogin?: () => void;
}

export const LoginForm: FC<LoginFormProps> = ({ onSuccessfulLogin }) => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const { email, password } = useSelector(getLoginFormData);

  const onChangeEmail = (value: string) => {
    dispatch(
      loginActions.setInputValue({
        email: value,
      })
    );
  };

  const onChangePassword = (value: string) => {
    dispatch(
      loginActions.setInputValue({
        password: value,
      })
    );
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await dispatch(loginByEmail({ email, password }));
    if (result.meta.requestStatus === "fulfilled" && onSuccessfulLogin) {
      onSuccessfulLogin();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        onChange={onChangeEmail}
        value={email}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        onChange={onChangePassword}
        value={password}
      />
      <Button disabled={isLoading}>Login</Button>
    </form>
  );
};
