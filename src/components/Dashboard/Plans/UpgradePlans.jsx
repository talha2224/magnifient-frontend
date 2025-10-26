import React from "react";
import { X } from "lucide-react";
import UpgradeImg from "../../../assets/upgrade.png";

const UpgradePlanModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-sm py-10 px-7 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute bg-gray-400 rounded-full p-1 top-[42px] right-6 text-white hover:bg-gray-500"
                >
                    <X size={11} />
                </button>

                {/* Content */}
                <h2 className="text-md font-semibold font-poppins text-center mb-2">
                    Premium plan
                </h2>

                <div className="flex flex-col items-center text-center">
                    {/* Image */}
                    <div className="h-20 mt-7 mb-4">
                        <img
                            src={UpgradeImg}
                            alt="upgrade"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <p className="font-semibold font-poppins text-md text-black">
                        Unlock the Full Experience
                    </p>
                    <p className="text-[11px] px-6 text-xs font-poppins text-gray-600 mt-1">
                        Upgrade to enjoy unlimited access, exclusive tools, and more ways to grow in your journey with God.
                    </p>

                    <button
                        onClick={onClose}
                        className="mt-3 w-full font-poppins text-xs py-3 bg-[#3CCDF8] text-white font-medium rounded-lg hover:bg-[#34bce2] transition"
                    >
                        Upgrade to pro
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpgradePlanModal;
