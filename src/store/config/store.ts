import { StateSchema } from "store/config/StateSchema";
import { counterReducer } from "modules/Counter";
import { configureStore } from "@reduxjs/toolkit";

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    preloadedState: initialState,
    reducer: {
      counter: counterReducer,
    },
    devTools: __DEV__,
  });
};
