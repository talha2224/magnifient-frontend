import React from "react";
import { X, ChevronRight, Check } from "lucide-react";

const BibleVersionModal = ({ isOpen, onClose, selectedVersion, setSelectedVersion }) => {
    const versions = ["KJV", "NIV", "ESV"];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg py-6">
                {/* Header */}
                <div className="relative flex justify-center items-center px-4 pb-3">
                    <h2 className="text-md font-semibold font-poppins text-center">
                        Bible Versions
                    </h2>
                    <button
                        onClick={onClose}
                        className="absolute right-9 text-gray-500 hover:text-black transition"
                    >
                        <X size={20} className="bg-gray-300 p-1 rounded-full" />
                    </button>
                </div>

                {/* Versions List */}
                <div className="px-8 py-4 space-y-3">
                    {versions.map((version) => (
                        <button
                            key={version}
                            onClick={() => setSelectedVersion(version)}
                            className="w-full flex items-center justify-between px-4 py-3 border rounded-md hover:bg-gray-50 transition text-sm font-poppins"
                        >
                            <span className="font-poppins text-sm">{version}</span>
                            <Check
                                size={16}
                                className={`rounded-full p-1 ${selectedVersion === version
                                    ? "text-white bg-[#3CCDF8]"
                                    : "text-white bg-gray-300"
                                    }`}
                            />
                        </button>
                    ))}

                    {/* Divider Line */}
                    <div className="border-t my-2"></div>

                    {/* Language Option */}
                    <button className="w-full flex items-center justify-between px-4 py-3 border rounded text-sm font-poppins">
                        English Language <ChevronRight size={18} />
                    </button>
                </div>

                {/* Close Button */}
                <div className="px-8">
                    <button
                        onClick={onClose}
                        className="w-full bg-[#3CCDF8] text-white rounded-md py-3 text-sm font-poppins transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BibleVersionModal;
