import React, { useState } from "react";
import { Check } from "lucide-react";

function Language() {
    const languages = [
        "English",
        "Spanish",
        "French",
        "German",
        "Italian",
        "Portuguese",
        "Russian",
        "Chinese",
        "Japanese",
        "Korean",
        "Hindi",
        "Urdu",
        "Arabic",
        "Turkish",
        "Dutch",
        "Greek",
        "Polish",
        "Swedish",
        "Norwegian",
        "Danish",
    ];

    const [selectedLang, setSelectedLang] = useState("English");

    return (
        <div className="px-5rounded-lg shadow w-full mx-auto">
            {/* Heading */}
            <div className="py-4 border-b px-4 ">
                <h2 className="text-lg  md:text-xl font-semibold font-poppins">
                    Language preference
                </h2>
            </div>
            {/* Language List */}
            <div className="flex px-4 flex-col gap-3">
                {languages.map((lang) => (
                    <button
                        key={lang}
                        onClick={() => setSelectedLang(lang)}
                        className="flex items-center font-poppins justify-between border-b px-4 py-3 text-sm font-poppins transition"
                    >
                        <span>{lang}</span>
                        <span
                            className={`flex items-center justify-center w-4 p-0.5 h-4 rounded-full ${selectedLang === lang
                                ? "bg-[#3CCDF8] text-white"
                                : "bg-gray-200 text-white"
                                }`}
                        >
                            <Check size={16} />
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Language;
