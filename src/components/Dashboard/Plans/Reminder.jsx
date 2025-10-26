import React from "react";
import { X } from "lucide-react";
import ReminderImg from '../../../assets/reminder.png'

const ReminderModal = ({ isOpen, onClose, onUpgrade }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-sm p-6 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute bg-gray-400 rounded-full p-1 top-[27px] right-6 text-white hover:bg-gray-500"
                >
                    <X size={11} />
                </button>

                {/* Content */}
                <h2 className="text-md font-semibold font-poppins text-center mb-2">Reminder</h2>

                <div className="flex flex-col items-center text-center">
                
                    <div className="h-32 mb-2">
                        <img
                            src={ReminderImg}
                            alt="reminder"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <p className="font-semibold font-poppins text-black">
                        Your Devotional Plan Reminder is Set
                    </p>
                    <p className="text-[11px] px-6 font-poppins text-gray-600 mt-1">
                        You'll now receive gentle notifications to keep you on track with
                        your daily readings and reflections.
                    </p>

                    <button
                        onClick={onUpgrade}
                        className="mt-3 w-full font-poppins text-xs py-3 bg-[#3CCDF8] text-white font-medium rounded-lg hover:bg-[#34bce2] transition"
                    >
                        Got it, Thanks!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReminderModal;
