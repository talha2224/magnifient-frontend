import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import { FaImage } from "react-icons/fa";
import { createPost } from "../../../api/posts";

const NewPostModal = ({ onClose, onPostCreated }) => {
    const fileInputRef = useRef(null);
    const [imageFile, setImageFile] = useState(null);
    const [description, setDescription] = useState("");
    const [postType, setPostType] = useState("text");
    const [category, setCategory] = useState("single");

    const handleUploadClick = () => fileInputRef.current?.click();

    const handleFileChange = (e) => setImageFile(e.target.files[0]);

    const handlePost = async () => {
        const post = await createPost({ description, postType, category, imageFile });
        if (post) {
            onPostCreated(post);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-5 relative">
                <button
                    onClick={onClose}
                    className="absolute mt-4 mr-3 bg-gray-300 rounded-full top-3 right-3 text-white p-1"
                >
                    <X size={10} />
                </button>
                <h2 className="text-center font-poppins text-lg font-semibold mb-8">
                    Create new post
                </h2>

                <div className="flex justify-between md:gap-48 gap-14 mb-4">
                    <select
                        className="flex-1 font-poppins border rounded-md p-2 text-xs"
                        value={postType}
                        onChange={(e) => setPostType(e.target.value)}
                    >
                        <option value="text">Text</option>
                        <option value="image">Image</option>
                        <option value="video">Video</option>
                    </select>

                    <button
                        onClick={handleUploadClick}
                        className="flex-1 flex items-center font-poppins justify-center gap-2 border rounded-md px-3 py-2 text-xs"
                    >
                        <FaImage size={16} />
                        Upload Image
                    </button>

                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>

                <textarea
                    rows="4"
                    placeholder="Write posts"
                    className="w-full border rounded-md focus:outline-none font-poppins bg-gray-100 p-2 text-sm mb-2 resize-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

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

                <button
                    onClick={handlePost}
                    className="w-full bg-[#3CCDF8] font-poppins text-white py-2 rounded-md font-medium"
                >
                    Post
                </button>
            </div>
        </div>
    );
};

export default NewPostModal;
