import React from "react";
import { X } from "lucide-react";
import { BiSolidShare } from "react-icons/bi";

const DailyDevotionHomeModal = ({ isOpen, onClose, onShare }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl mx-4 md:mx-0 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center pt-6 px-6 pb-5">
                    <h2 className="text-lg md:text-xl font-semibold text-center flex-1 font-poppins">
                        Daily Devotion
                    </h2>
                    <button onClick={onClose} className="text-gray-600 bg-gray-300 rounded-full p-1 hover:text-black">
                        <X size={14} />
                    </button>
                </div>

                {/* Body */}
                <div className="md:px-8 px-5 pb-10">
                    {/* Title */}
                    <p className="md:text-[16px] text-[10px] text-sm font-medium font-poppins text-[#4D4D4D]">
                        Trusting Through the Unknown
                    </p>
                    <p className="md:text-md text-xs font-poppins text-[#575757] mt-2">
                        Scripture: "For I know the plans I have for you,” declares the Lord, “plans to
                        prosper you and not to harm you, plans to give you hope and a future."
                    </p>
                    <p className="md:text-md text-xs text-[#6C6C6C] font-poppins font-semibold mt-1">
                        — Jeremiah 29:11
                    </p>

                    {/* Reflection Section */}
                    <div className="bg-[#F6F6F6] p-3 mt-4 mb-4 rounded">
                        <h4 className="font-semibold font-poppins text-sm text-black">Reflection</h4>
                        <p className="md:text-md text-xs text-[#727272] mt-1">
                            Life often feels uncertain, and in moments of waiting or confusion, we tend to
                            lean on our own limited understanding. But God calls us to trust His higher plan.
                            Even when we can’t see what’s ahead. He sees the full picture. His timing,
                            though different from ours, is always perfect.
                        </p>
                    </div>

                    {/* Prayer Section */}
                    <div className="bg-[#E6F4DB] p-3 mt-4 mb-4 rounded">
                        <h4 className="font-semibold font-poppins text-sm text-black">Prayer</h4>
                        <p className="md:text-md text-xs text-[#727272] mt-1">
                            Lord, help me trust Your plans even when I do not understand them. Strengthen
                            my faith and guide me through uncertainty with peace and hope.
                        </p>
                    </div>

                    {/* Share Button */}
                    <div className="flex justify-center mt-4">
                        <button onClick={() => {
                            onClose();
                            onShare();
                        }} className="flex justify-center w-full items-center gap-2 bg-[#3CCDF8] text-white px-6 py-3 rounded-lg font-medium">
                            <BiSolidShare className="text-white" size={18} />
                            <span className="font-poppins text-xs md:text-[14px]">Share</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyDevotionHomeModal;
