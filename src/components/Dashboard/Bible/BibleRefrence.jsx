import React, { useState } from "react";
import { X, ChevronDown, ChevronUp, Search } from "lucide-react";

const books = [
    "Psalm",
    "Proverbs",
    "Ecclesiastes",
    "Songs of Solomon",
    "Isaiah",
    "Jeremiah",
];

const BibleReference = ({ isOpen, onClose }) => {
    const [expandedBook, setExpandedBook] = useState(null);

    const handleToggleBook = (book) => {
        setExpandedBook(expandedBook === book ? null : book);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg py-8 overflow-hidden">
                {/* Header */}
                <div className="relative flex justify-center items-center px-4 py-3 mb-4">
                    <h2 className="text-lg font-semibold font-poppins text-center">Bible Reference</h2>
                    <button
                        onClick={onClose}
                        className="absolute right-6 text-gray-500 hover:text-black transition"
                    >
                        <X size={20} className="bg-gray-300 rounded-full p-[3px]" />
                    </button>
                </div>

                {/* Search */}
                <div className="mx-5 mt-2 relative">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search Reference"
                        className="w-full border rounded-md pl-9 pr-3 py-3 text-sm focus:outline-none focus:ring focus:ring-gray-300"
                    />
                </div>

                {/* Books */}
                <div className="max-h-[70vh] overflow-y-auto">
                    {books.map((book) => (
                        <div key={book} className="border my-2 mx-5 rounded-md">
                            <button
                                onClick={() => handleToggleBook(book)}
                                className="w-full flex items-center px-4 py-3 font-poppins text-sm font-medium hover:bg-gray-50"
                            >
                                <span>{book}</span>
                                <span className="ml-3">
                                    {expandedBook === book ? (
                                        <ChevronUp size={18} />
                                    ) : (
                                        <ChevronDown size={18} />
                                    )}
                                </span>
                            </button>

                            {expandedBook === book && (
                                <div className="px-4 pb-3 grid grid-cols-6 gap-2">
                                    {Array.from({ length: 24 }, (_, i) => (
                                        <button
                                            key={i + 1}
                                            className="border rounded-md py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 transition"
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BibleReference;
