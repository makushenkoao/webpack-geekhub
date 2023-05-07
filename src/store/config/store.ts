import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "store/config/StateSchema";
import { counterReducer } from "modules/Counter";
import { currentUserReducer } from "modules/CurrentUser";
import { loginReducer } from "modules/AuthByEmail";
import { $api } from "api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const createReduxStore = (initialState?: StateSchema) => {
  const reducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    currentUser: currentUserReducer,
    loginForm: loginReducer,
  };

  const extraArgument: ThunkExtraArg = {
    api: $api,
  };

  return configureStore({
    preloadedState: initialState,
    reducer: reducer,
    devTools: __DEV__,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument,
        },
      }),
  });
};

export type RootState = ReturnType<ReturnType<typeof createReduxStore>["getState"]>;
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
