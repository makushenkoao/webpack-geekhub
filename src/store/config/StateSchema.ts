import { ICounterSchema } from "modules/Counter";
import { ICurrentUserSchema } from "modules/CurrentUser";
import { ILoginSchema } from "modules/AuthByEmail";
import { AxiosInstance } from "axios";

export interface StateSchema {
  counter: ICounterSchema;
  currentUser: ICurrentUserSchema;
  loginForm: ILoginSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkApiConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
