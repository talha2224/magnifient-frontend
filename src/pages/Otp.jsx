import React, { useState } from "react";
import toast from "react-hot-toast";
import { resendOtp, verifyOtp } from "../api/auth";

const OtpModal = ({ isOpen, onClose, onContinue }) => {
    const [otp, setOtp] = useState("");

    if (!isOpen) return null;

    const handleVerifyOtp = async () => {
        if (!otp) return toast.error("Please enter otp!");
        try {
            const res = await verifyOtp(localStorage.getItem("email"), otp);
            if (res) {
                setOtp("")
                onClose()
                onContinue()
            }
        } catch (error) {
            console.error(error);
        }
    }


    const handleSendOtp = async () => {
        try {
            await resendOtp(localStorage.getItem("email"));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="relative bg-white w-full max-w-[90%] sm:max-w-lg md:max-w-xl rounded-lg shadow-lg px-6 py-8 sm:px-16 sm:py-12 md:px-28 md:py-16">

                {/* Heading */}
                <h2 className="text-center text-sm md:text-lg text-black font-poppins font-semibold mb-2">
                    OTP Verification
                </h2>

                <p className="text-gray-400 px-8 flex text-xs text-center">
                    Let us know what you're hoping to grow in — we’ll tailor your experience accordingly.
                </p>

                {/* OTP Input */}
                <input
                    type="text"
                    placeholder="OTP Code"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full border-b mt-4 text-xs text-center text-[#212121] font-poppins px-3 py-2 mb-4 focus:outline-none"
                />

                {/* Continue Button */}
                <button
                    onClick={handleVerifyOtp}
                    className="w-full bg-[#3CCDF8] font-poppins text-xs sm:text-sm text-white font-semibold py-3 rounded-md mb-3"
                >
                    Proceed
                </button>

                <p className="text-[10px] sm:text-xs text-center mt-2 text-gray-400 leading-relaxed">
                    Didn’t receive a code?{" "}
                    <a onClick={handleSendOtp} className="text-black hover:underline">
                        Resend
                    </a>
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

export default OtpModal;
