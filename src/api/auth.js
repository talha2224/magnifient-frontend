import api from "./api";
import toast from "react-hot-toast";

const showLoadingToast = (msg = "Please wait...") => toast.loading(msg);
const hideLoadingToast = (id) => toast.dismiss(id);

export const registerUser = async (email, password, name = "") => {
  const toastId = showLoadingToast("Creating account...");
  try {
    const { data } = await api.post("/register", { email, password, name });
    hideLoadingToast(toastId);
    toast.success("Account created successfully!");
    localStorage.setItem("token", data.data.token);
    return data.data;
  } catch (err) {
    hideLoadingToast(toastId);
    toast.dismiss();
    toast.error(err.response?.data?.msg || "Registration failed!");
  }
};

export const loginUser = async (email, password) => {
  const toastId = showLoadingToast("Logging in...");
  try {
    const { data } = await api.post("/login", { email, password });
    hideLoadingToast(toastId);
    toast.success("Login successful!");
    localStorage.setItem("token", data.data.token);
    return data.data.user;
  } catch (err) {
    console.log(err.response,'err.response');
    hideLoadingToast(toastId);
    toast.dismiss();
    toast.error(err.response?.data?.msg || "Login failed!");
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
  const toastId = showLoadingToast("Updating profile...");
  try {
    const { data } = await api.put("/me", payload);
    hideLoadingToast(toastId);
    toast.success("Profile updated!");
    return data.data;
  } catch (err) {
    hideLoadingToast(toastId);
    toast.dismiss();
    toast.error(err.response?.data?.msg || "Update failed!");
  }
};

export const resendOtp = async (email) => {
  const toastId = showLoadingToast("Resending OTP...");
  try {
    const { data } = await api.get(`/resend-otp/${email}`);
    hideLoadingToast(toastId);
    toast.success(data.msg || "OTP sent successfully!");
    return data;
  } catch (err) {
    hideLoadingToast(toastId);
    toast.dismiss();
    toast.error(err.response?.data?.msg || "Failed to resend OTP!");
  }
};

export const verifyOtp = async (email, otp) => {
  const toastId = showLoadingToast("Verifying OTP...");
  try {
    const { data } = await api.post("/verify-otp", { email, otp });
    hideLoadingToast(toastId);
    toast.success(data.msg || "OTP verified successfully!");
    return data;
  } catch (err) {
    hideLoadingToast(toastId);
    toast.dismiss();
    toast.error(err.response?.data?.msg || "OTP verification failed!");
  }
};

export const changePassword = async (email, password) => {
  const toastId = showLoadingToast("Changing password...");
  try {
    const { data } = await api.post("/change-password", { email, password });
    hideLoadingToast(toastId);
    toast.success(data.msg || "Password changed successfully!");
    return data;
  } catch (err) {
    hideLoadingToast(toastId);
    toast.dismiss();
    toast.error(err.response?.data?.msg || "Password change failed!");
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  toast.success("Logged out successfully!");
};
