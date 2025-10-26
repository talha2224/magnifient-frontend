import React, { useState } from "react";
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignInModal = ({ isOpen, onClose, switchToSignup, onForgotPassword, onContinue }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    if (!isOpen) return null;

    const handleLogin = async () => {
        if (!email) return toast.error("Please enter an email!");
        if (!password) return toast.error("Please enter a password!");

        try {
            const res = await loginUser(email, password);
            if (res) {
                setEmail("")
                setPassword("")
                navigate("/mainhome");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="relative bg-white w-full max-w-[90%] sm:max-w-lg md:max-w-xl rounded-lg shadow-lg px-6 py-8 sm:px-16 sm:py-12 md:px-28 md:py-16">

                {/* Tabs */}
                <div className="flex justify-center mb-3 gap-3 bg-[#F4F4F4] px-2 py-[7px] rounded-md w-fit mx-auto">
                    <button
                        onClick={() => {
                            onClose();
                            switchToSignup();
                        }}
                        className="px-4 sm:px-6 py-1 font-medium text-black font-poppins text-xs sm:text-sm"
                    >
                        Sign up
                    </button>
                    <button className="px-4 sm:px-6 py-1 font-medium rounded bg-white font-poppins text-xs sm:text-sm text-black shadow-sm">
                        Sign in
                    </button>
                </div>

                {/* Heading */}
                <h2 className="text-center text-sm sm:text-md text-black font-poppins font-semibold mb-6">
                    Welcome Back
                </h2>

                {/* Google Button */}
                <button className="w-full flex items-center justify-center gap-2 border border-[#E6E6E6] rounded-md py-3 mb-4 bg-[#FBFBFB]">
                    <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="Google"
                        className="w-4 h-4 object-contain"
                    />
                    <span className="text-xs sm:text-sm text-black font-poppins font-medium">
                        Sign in with Google
                    </span>
                </button>

                <div className="flex items-center mb-2">
                    <div className="flex-1 border-t" />
                    <span className="px-3 text-xs sm:text-sm text-gray-400">Or</span>
                    <div className="flex-1 border-t" />
                </div>

                {/* Email */}
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b rounded-md text-center text-[#212121] font-poppins px-3 py-3 text-xs sm:text-sm focus:outline-none"
                />

                {/* Password */}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-b rounded-md text-center text-[#212121] font-poppins px-3 py-3 text-xs sm:text-sm mb-4 focus:outline-none"
                />

                {/* Sign In Button */}
                <button onClick={handleLogin} className="w-full bg-[#3CCDF8] font-poppins text-xs sm:text-sm text-white font-semibold py-3 rounded-md mb-3">
                    Continue
                </button>

                {/* Forgot Password */}
                <p onClick={() => {
                    onClose();
                    onForgotPassword();
                }} className="text-center text-xs sm:text-xs text-[#212121] font-poppins cursor-pointer hover:underline">
                    Forgot your password?
                </p>

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default SignInModal;
