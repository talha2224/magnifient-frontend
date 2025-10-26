import React from "react";
import GoodTick from '../assets/tick.png'


const SuccessModal = ({ isOpen, onClose,onContinue }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="relative bg-white w-full max-w-[90%] sm:max-w-lg md:max-w-xl rounded-lg shadow-lg px-6 py-8 sm:px-16 sm:py-12 md:px-28 md:py-16">

                {/* Centered Image */}
                <img
                    src={GoodTick}
                    className="md:h-20 md:w-20 h-10 w-10 object-contain mx-auto mb-4"
                    alt="Success"
                />

                {/* Heading */}
                <h2 className="text-center text-sm md:text-lg text-black font-poppins font-semibold mb-2">
                    Password reset
                </h2>

                <p className="text-gray-400 px-8 text-center text-xs mb-6">
                    You’ve successfully reset your password
                </p>

                {/* Continue Button */}
                <button onClick={()=>{
                    onClose()
                    onContinue()
                }}
                    className="w-full bg-[#3CCDF8] font-poppins text-xs sm:text-sm text-white font-semibold py-3 rounded-md mb-3"
                >
                    Login
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

export default SuccessModal;
