import { ICounterSchema } from "modules/Counter";
import { ICurrentUserSchema } from "modules/CurrentUser";
import { ILoginSchema } from "modules/AuthByEmail";

export interface StateSchema {
  counter: ICounterSchema;
  currentUser: ICurrentUserSchema;
  loginForm: ILoginSchema;
}
