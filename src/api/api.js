import axios from "axios";
export const DEV_URL = "http://localhost:8000";

export const api = axios.create({
  baseURL: DEV_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["authorization"] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
