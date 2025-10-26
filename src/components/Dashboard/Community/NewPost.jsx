import React, { useRef } from "react";
import { X } from "lucide-react";
import { FaImage } from "react-icons/fa";

const NewPostModal = ({ onClose }) => {
    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-5 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute mt-4 mr-3 bg-gray-300 rounded-full top-3 right-3 text-white p-1"
                >
                    <X size={10} />
                </button>

                {/* Title */}
                <h2 className="text-center font-poppins text-lg font-semibold mb-8">
                    Create new post
                </h2>

                {/* Post type & Upload image */}
                <div className="flex justify-between md:gap-48 gap-14 mb-4">
                    <select className="flex-1 font-poppins border rounded-md p-2 text-xs">
                        <option>Post type</option>
                        <option>Text</option>
                        <option>Image</option>
                        <option>Video</option>
                    </select>

                    {/* Upload Button */}
                    <button
                        onClick={handleUploadClick}
                        className="flex-1 flex items-center font-poppins justify-center gap-2 border rounded-md px-3 py-2 text-xs"
                    >
                        <FaImage size={16} />
                        Upload Image
                    </button>

                    {/* Hidden File Input */}
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        className="hidden"
                    />
                </div>

                {/* Write post */}
                <textarea
                    rows="4"
                    placeholder="Write posts"
                    className="w-full border rounded-md focus:outline-none font-poppins bg-gray-100 p-2 text-sm mb-2 resize-none"
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {["Faith", "Healing", "Joy", "Giving", "Prayer requests"].map(
                        (tag, idx) => (
                            <button
                                key={idx}
                                className={`px-4 font-poppins py-2 rounded text-xs ${idx === 0
                                    ? "bg-gray-500 text-white"
                                    : "bg-gray-100 text-gray-700"
                                    }`}
                            >
                                {tag}
                            </button>
                        )
                    )}
                </div>

                {/* Post Button */}
                <button className="w-full bg-[#3CCDF8] font-poppins text-white py-2 rounded-md font-medium">
                    Post
                </button>
            </div>
        </div>
    );
};

export default NewPostModal;
