import axios, { AxiosInstance } from "axios";
import { auth } from "../services/firebase";
import { AUTH_TOKEN_LS } from "../utils/constants";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const getAuthToken = async () => {
  let currentToken = localStorage.getItem(AUTH_TOKEN_LS);
  if (auth.currentUser && !currentToken) {
    const token = await auth.currentUser?.getIdToken();
    localStorage.setItem(AUTH_TOKEN_LS, token || "");
    currentToken = token;
  }
  return currentToken;
};

const axiosInstance: AxiosInstance = axios.create({
  timeout: 60 * 60 * 5,
  baseURL: BASE_URL,
});

export const get = async (url: string) => {
  const token = await getAuthToken();
  return axiosInstance.get(url, {
    headers: {
      token,
    },
  });
};

export default axiosInstance;
