import React, { useState } from "react";
import { resendOtp } from "../api/auth";
import toast from "react-hot-toast";

const ForgotPasswordModal = ({ isOpen, onClose, onContinue }) => {
    const [email, setEmail] = useState("");

    if (!isOpen) return null;

    const handleSendOtp = async () => {
        if (!email) return toast.error("Please enter an email!");
        try {
            const res = await resendOtp(email);
            if (res) {
                setEmail("")
                localStorage.setItem("email",email)
                onClose()
                onContinue()
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="relative bg-white w-full max-w-[90%] sm:max-w-lg md:max-w-xl rounded-lg shadow-lg px-6 py-8 sm:px-16 sm:py-12 md:px-28 md:py-16">

                {/* Heading */}
                <h2 className="text-center text-sm md:text-lg text-black font-poppins font-semibold mb-2">
                    Reset Password
                </h2>

                <p className="text-gray-400 px-8 flex text-xs text-center">
                    Let us know what you're hoping to grow in — we’ll tailor your experience accordingly.
                </p>

                {/* Email Input */}
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b rounded-md mt-4 text-center text-[#212121] font-poppins px-3 py-3 text-xs sm:text-sm focus:outline-none mb-4"
                />

                {/* Continue Button */}
                <button
                    onClick={handleSendOtp}
                    className="w-full bg-[#3CCDF8] font-poppins text-xs sm:text-sm text-white font-semibold py-3 rounded-md mb-3"
                >
                    Proceed
                </button>

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

export default ForgotPasswordModal;
