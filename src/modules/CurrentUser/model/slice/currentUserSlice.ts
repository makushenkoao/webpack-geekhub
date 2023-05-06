import { ICurrentUser, ICurrentUserSchema } from "modules/CurrentUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_USER_KEY } from "consts/localStorage";

const initialState: ICurrentUserSchema = {
  authData: null,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (
      state: ICurrentUserSchema,
      action: PayloadAction<ICurrentUser>
    ) => {
      state.authData = action.payload;
    },
    initCurrentUser: (state: ICurrentUserSchema) => {
      const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state: ICurrentUserSchema) => {
      state.authData = undefined;
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    },
  },
});

export const { reducer: currentUserReducer, actions: currentUserActions } =
  currentUserSlice;
