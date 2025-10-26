import React, { useState } from "react";
import {
    ChevronDown,
    ChevronUp,
    Download,
    Globe,
    Search,
    PlayCircle,
} from "lucide-react";
import PlayImg from '../../assets/play.png'

const Psalm = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [showSearch, setShowSearch] = useState(false);

    const psalms = [
        {
            title: "Psalm 119",
            type: "main", // main psalm box with search/download/KJV
            verses: [
                "1. Blessed are the undefiled in the way, who walk in the law of the Lord.",
                "2. Blessed are they that keep his testimonies, and that seek him with the whole heart.",
                "3. They also do no iniquity: they walk in his ways.",
                "4. Thou hast commanded us to keep thy precepts diligently.",
                "5. O that my ways were directed to keep thy statutes!",
                "6. Then shall I not be ashamed, when I have respect unto all thy commandments.",
                "7. I will praise thee with uprightness of heart, when I shall have learned thy righteous judgments.",
                "8. I will keep thy statutes: O forsake me not utterly.",
                "9. Wherewithal shall a young man cleanse his way? by taking heed thereto according to thy word.",
                "10. With my whole heart have I sought thee: O let me not wander from thy commandments.",
                "11. Thy word have I hid in mine heart, that I might not sin against thee.",
                "12. Blessed art thou, O Lord: teach me thy statutes.",
                "13. With my lips have I declared all the judgments of thy mouth.",
                "14. I have rejoiced in the way of thy testimonies, as much as in all riches.",
                "15. I will meditate in thy precepts, and have respect unto thy ways.",
                "16. I will delight myself in thy statutes: I will not forget thy word.",
            ],
        },
        {
            title: "Psalm 119",
            type: "video", // second psalm box with video only
            verses: [],
        },
    ];

    const togglePsalm = (index) => {
        setOpenIndex(openIndex === index ? null : index);
        setShowSearch(false); // close search when switching
    };

    return (
        <div className="max-w-5xl mx-auto p-4 space-y-4">
            {psalms.map((psalm, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl shadow-md border border-gray-200"
                >
                    {/* Header Row */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                        {/* Left: Title + Arrow */}
                        <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => togglePsalm(index)}
                        >
                            <h2 className="font-semibold text-gray-800">{psalm.title}</h2>
                            {openIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-gray-600" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-gray-600" />
                            )}
                        </div>

                        {/* Right: conditional actions */}
                        <div className="flex items-center gap-3">
                            {psalm.type === "main" && (
                                <>
                                    {/* Search */}
                                    {showSearch ? (
                                        <div className="flex items-center bg-gray-100 px-2 py-1 rounded-md">
                                            <Search className="w-4 h-4 text-gray-500" />
                                            <input
                                                type="text"
                                                placeholder="Search"
                                                className="ml-2 bg-transparent outline-none text-sm w-40 sm:w-56"
                                            />
                                            <button
                                                onClick={() => setShowSearch(false)}
                                                className="ml-2 text-sm text-gray-600 hover:text-red-500"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => setShowSearch(true)}
                                            className="text-gray-600 hover:text-blue-600"
                                        >
                                            <Search className="w-5 h-5" />
                                        </button>
                                    )}

                                    {/* Download */}
                                    <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md text-sm">
                                        <Download className="w-4 h-4" />
                                        Download
                                    </button>

                                    {/* Language */}
                                    <button className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md text-sm">
                                        <Globe className="w-4 h-4" />
                                        KJV
                                    </button>
                                </>
                            )}

                            {psalm.type === "video" && (
                                <button className="text-gray-600 hover:text-blue-600">
                                    <img src={PlayImg} className="h-8 w-8 object-contain bg-[#45BDE0] rounded-full p-2" alt="" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Verses */}
                    {openIndex === index && psalm.verses.length > 0 && (
                        <div className="px-4 py-3 bg-blue-50 rounded-b-xl space-y-1 text-gray-700 text-sm leading-relaxed">
                            {psalm.verses.map((verse, i) => (
                                <p key={i}>{verse}</p>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Psalm;
