import api from "./api";
import toast from "react-hot-toast";

export const registerUser = async (email, password, name = "") => {
  try {
    const { data } = await api.post("/register", { email, password, name });
    console.log(data,'data')
    localStorage.setItem("token", data.data.token);
    toast.success("Account created successfully!");
    return data.data;
  } catch (err) {
    console.error(err);
  }
};

export const loginUser = async (email, password) => {
  try {
    const { data } = await api.post("/login", { email, password });
    localStorage.setItem("token", data.data.token);
    toast.success("Login successful!");
    return data.data.user;
  } catch (err) {
    console.error(err);
  }
};

export const getMyProfile = async () => {
  try {
    const { data } = await api.get("/me");
    return data.data;
  } catch (err) {
    console.error(err);
  }
};

export const updateProfile = async (payload) => {
  try {
    const { data } = await api.put("/me", payload);
    toast.success("Profile updated!");
    return data.data;
  } catch (err) {
    console.error(err);
  }
};

export const resendOtp = async (email) => {
  try {
    const { data } = await api.get(`/resend-otp/${email}`);
    toast.success(data.msg || "OTP sent successfully!");
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const verifyOtp = async (email, otp) => {
  try {
    const { data } = await api.post("/verify-otp", { email, otp });
    toast.success(data.msg || "OTP verified successfully!");
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const changePassword = async (email, password) => {
  try {
    const { data } = await api.post("/change-password", { email, password });
    toast.success(data.msg || "Password changed successfully!");
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  toast.success("Logged out successfully!");
};
