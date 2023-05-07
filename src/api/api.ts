import axios from "axios";
import { LOCAL_STORAGE_USER_KEY } from "consts/localStorage";

export const $api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
    authorization: localStorage.getItem(LOCAL_STORAGE_USER_KEY),
  },
});
