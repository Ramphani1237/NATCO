import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

if (!API_URL) {
  console.error("REACT_APP_API_URL is missing");
}

const api = axios.create({
  baseURL: `${API_URL}/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    if (config.url.includes("/auth/login") || config.url.includes("/auth/register")) {
      return config;
    }

    const token = localStorage.getItem("token");
    if (token && token !== "undefined") {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);


export default api;
