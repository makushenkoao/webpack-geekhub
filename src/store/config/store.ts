import { StateSchema } from "store/config/StateSchema";
import { counterReducer } from "modules/Counter";
import { configureStore } from "@reduxjs/toolkit";
import { currentUserReducer } from "modules/CurrentUser";
import { loginReducer } from "modules/AuthByEmail";

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    preloadedState: initialState,
    reducer: {
      counter: counterReducer,
      currentUser: currentUserReducer,
      loginForm: loginReducer,
    },
    devTools: __DEV__,
  });
};
