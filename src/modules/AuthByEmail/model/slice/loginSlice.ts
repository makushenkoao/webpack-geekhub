import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ILoginFormData,
  ILoginSchema,
} from "modules/AuthByEmail/model/types/loginSchema";
import { loginByEmail } from "modules/AuthByEmail/model/services/loginByEmail";

const initialState: ILoginSchema = {
  form: {
    email: "",
    password: "",
  },
  error: null,
  isLoading: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setInputValue: (
      state: ILoginSchema,
      action: PayloadAction<Partial<ILoginFormData>>
    ) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByEmail.pending, (state: ILoginSchema) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(
      loginByEmail.fulfilled,
      (state: ILoginSchema) => {
        state.isLoading = false;
      }
    );
    builder.addCase(
      loginByEmail.rejected,
      (state: ILoginSchema, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export const { reducer: loginReducer, actions: loginActions } = loginSlice;
