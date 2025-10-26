import React, { useState } from "react";
import toast from "react-hot-toast";
import { changePassword } from "../api/auth";

const CreatePasswordModal = ({ isOpen, onClose, onContinue }) => {
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const email = localStorage.getItem("email");

    if (!isOpen) return null;

    const handleCreatePassword = async () => {
        if (!password || !confirm) return toast.error("Please fill both fields");
        if (password !== confirm) return toast.error("Passwords do not match");

        try {
            let res = await changePassword(email, password);
            if (res) {
                setPassword("")
                setConfirm("")
                localStorage.removeItem("email");
                onClose();
                onContinue()
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="relative bg-white w-full max-w-[90%] sm:max-w-lg md:max-w-xl rounded-lg shadow-lg px-6 py-8 sm:px-16 sm:py-12 md:px-28 md:py-16">

                {/* Heading */}
                <h2 className="text-center text-sm md:text-lg text-black font-poppins font-semibold mb-2">
                    Create new password
                </h2>

                <p className="text-gray-400 px-8 flex text-xs text-center">
                    Let us know what you're hoping to grow in — we’ll tailor your experience accordingly.
                </p>

                {/* Email Input */}
                <input
                    type="password"
                    placeholder="Create new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-b text-xs px-3 py-2 mt-4 text-center text-[#212121] font-poppins mb-2 focus:outline-none"
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    className="w-full border-b px-3 text-xs py-2 text-center text-[#212121] font-poppins mb-4 focus:outline-none"
                />

                {/* Continue Button */}
                <button
                    onClick={handleCreatePassword}
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

export default CreatePasswordModal;
