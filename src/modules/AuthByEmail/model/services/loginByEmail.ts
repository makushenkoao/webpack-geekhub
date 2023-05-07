import { createAsyncThunk } from "@reduxjs/toolkit";
import { currentUserActions, ICurrentUser } from "modules/CurrentUser";
import { LOCAL_STORAGE_USER_KEY } from "consts/localStorage";
import { ThunkApiConfig } from "store";

interface LoginByEmailPayload {
  email: string;
  password: string;
}

export const loginByEmail = createAsyncThunk<
  ICurrentUser,
  LoginByEmailPayload,
  ThunkApiConfig<string>
>(
  "loginForm/loginByEmail",
  async (payload, { rejectWithValue, dispatch, ...thunkApi }) => {
    try {
      const { data } = await thunkApi.extra.api.post<ICurrentUser>(
        "/login",
        payload
      );
      if (!data) throw new Error("User not found");
      dispatch(currentUserActions.setCurrentUser(data));
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(data));
      return data;
    } catch (e) {
      return rejectWithValue("Invalid email or password");
    }
  }
);
