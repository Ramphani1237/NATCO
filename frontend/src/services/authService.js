import api from "./api";

export const login = async (data) => {
  const res = await api.post("/auth/login", data);
  localStorage.setItem("token", res.data.token);
  localStorage.setItem("role", res.data.user.role);
  return res.data;
};

export const register = async (data) => {
  return api.post("/auth/register", data);
};
