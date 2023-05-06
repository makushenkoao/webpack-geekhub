import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { currentUserActions, ICurrentUser } from "modules/CurrentUser";
import axios from "axios";
import { LOCAL_STORAGE_USER_KEY } from "consts/localStorage";

interface LoginByEmailPayload {
  email: string;
  password: string;
}

export const loginByEmail = createAsyncThunk<
  ICurrentUser,
  LoginByEmailPayload,
  {
    rejectValue: string;
  }
>("loginForm/loginByEmail", async (payload, { rejectWithValue, dispatch }) => {
  try {
    const { data } = await axios.post<ICurrentUser>(
      "http://localhost:8000/login",
      payload
    );
    if (!data) throw new Error("User not found");
    dispatch(currentUserActions.setCurrentUser(data));
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(data));
    return data;
  } catch (e) {
    return rejectWithValue("Invalid email or password");
  }
});
