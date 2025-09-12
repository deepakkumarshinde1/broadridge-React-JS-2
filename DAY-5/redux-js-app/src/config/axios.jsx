import axios from "axios";
import { jwtDecode } from "jwt-decode";
const api = axios.create({
  baseURL: "http://localhost:4000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
export let getDecodeAuthToken = () => {
  let token = getAuthToken();
  try {
    let userDetails = jwtDecode(token);
    return userDetails;
  } catch (error) {
    state.loginDetails = null;
  }
};

function getAuthToken() {
  return localStorage.getItem("token");
}
api.interceptors.request.use(
  (config) => {
    let token = getAuthToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
