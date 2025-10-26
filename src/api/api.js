import axios from "axios";
import toast from "react-hot-toast";
import config from "../config"; 

const api = axios.create({
  baseURL: config.baseUrl + "/account",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const msg = error?.response?.data?.msg || "Something went wrong";
    toast.error(msg);
    return Promise.reject(error);
  }
);

export default api;
