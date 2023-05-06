import { useDispatch, useSelector } from "react-redux";
import { FormEvent } from "react";

import { Input } from "ui/Input";
import { Button } from "ui/Button";
import { loginActions } from "modules/AuthByEmail/model/slice/loginSlice";
import { getLoginError } from "modules/AuthByEmail/model/selectors/getLoginError";
import { getLoginIsLoading } from "modules/AuthByEmail/model/selectors/getLoginIsLoading";
import { getLoginFormData } from "modules/AuthByEmail/model/selectors/getLoginFormData";
import { loginByEmail } from "modules/AuthByEmail/model/services/loginByEmail";

interface LoginFormProps {
  onSuccessfulLogin?: () => void;
}

export const LoginForm = ({ onSuccessfulLogin }: LoginFormProps) => {
  const dispatch = useDispatch();

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
    // TODO remake
    // @ts-ignore
    dispatch(loginByEmail({email, password}))
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
