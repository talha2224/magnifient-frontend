import React, { useState } from "react";
import { IoTimeSharp, IoEye } from "react-icons/io5";
import MediaOneImg from "../../assets/media1.png";
import MediaTwoImg from "../../assets/media2.png";
import MediaThreeImg from "../../assets/media3.png";
import { MdOutlineSort } from "react-icons/md";
import { Link } from "react-router-dom";

const Media = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const sermons = [
        {
            title: "Worship Live with Us",
            description:
                "Join our real-time Sunday service and be part of the fellowship from anywhere in th...",
            image: MediaOneImg,
            duration: "1h 30min",
            views: "2K",
            type: "video",
        },
        {
            title: "Live Bible Teaching Session",
            description:
                "Engage with deep scriptural insights and practical life lessons as they unfold live.",
            image: MediaTwoImg,
            duration: "1h 30min",
            views: "2K",
            type: "audio",
        },
        {
            title: "Praise and Worship in Real Time",
            description:
                "Sing along and lift your heart in worship with our live praise team.",
            image: MediaThreeImg,
            duration: "1h 30min",
            views: "2K",
            type: "video",
        },
    ];

    const playlists = [
        {
            title: "Judgement Day",
            description:
                "Life often feels uncertain, and in moments of waiting or confusion, we tend to lean on...",
            image: MediaThreeImg,
            type: "audio",
            duration: "50min",
            views: "1.2K",
        },
        {
            title: "Judgement Day",
            description:
                "Life often feels uncertain, and in moments of waiting or confusion, we tend to lean on...",
            image: MediaOneImg,
            type: "video",
            duration: "1h 05min",
            views: "3.4K",
        },
        {
            title: "Judgement Day",
            description:
                "Life often feels uncertain, and in moments of waiting or confusion, we tend to lean on...",
            image: MediaTwoImg,
            type: "audio",
            duration: "40min",
            views: "900",
        },
    ];

    // filtering logic
    const filteredSermons =
        activeFilter === "all"
            ? sermons
            : sermons.filter((item) => item.type === activeFilter);

    const filteredPlaylists =
        activeFilter === "all"
            ? playlists
            : playlists.filter((item) => item.type === activeFilter);

    return (
        <div className="md:pb-8">
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center justify-between mb-4">
                <div className="flex gap-2">
                    <button
                        onClick={() => setActiveFilter("all")}
                        className={`md:px-4 md:py-2 py-2 px-4 font-poppins md:text-sm text-xs rounded-lg font-medium ${activeFilter === "all"
                            ? "bg-[#3CCDF8] text-white"
                            : "bg-white border text-gray-400"
                            }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setActiveFilter("audio")}
                        className={`md:px-4 md:py-2 px-3 py-2 rounded-lg md:text-sm text-xs font-poppins text-sm font-medium ${activeFilter === "audio"
                            ? "bg-[#3CCDF8] text-white"
                            : "bg-white border text-gray-400"
                            }`}
                    >
                        Audio
                    </button>
                    <button
                        onClick={() => setActiveFilter("video")}
                        className={`md:px-4 md:py-2 px-3 py-2 rounded-lg md:text-sm text-xs font-poppins font-medium ${activeFilter === "video"
                            ? "bg-[#3CCDF8] text-white"
                            : "bg-white border text-gray-400"
                            }`}
                    >
                        Videos
                    </button>
                </div>
                <button className="flex items-center gap-2 md:text-sm text-xs font-poppins md:px-4 px-3 py-2 rounded-md bg-gray-200">
                    <MdOutlineSort size={18} /> Filter
                </button>
            </div>

            {/* Live Church Sermons */}
            <div className="border px-4 py-6 rounded-md">
                <h2 className="text-xl font-semibold font-poppins mb-4">Live Church Sermons</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredSermons.map((sermon, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow">
                            <div className="p-3">
                                <Link to='/livesermon'>
                                    <img
                                        src={sermon.image}
                                        alt={sermon.title}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                </Link>
                            </div>
                            <div className="px-4 pb-4">
                                <h3 className="font-medium text-base">{sermon.title}</h3>
                                <p className="text-gray-500 text-xs mt-1">{sermon.description}</p>
                                <div className="flex justify-between items-center text-xs text-gray-500 mt-3">
                                    {/* Time */}
                                    <div className="flex bg-[#F8F8F8] border py-1 px-2 rounded-full items-center gap-1">
                                        <IoTimeSharp size={12} className="text-black" />
                                        <span className="text-[10px] font-medium text-black">
                                            {sermon.duration}
                                        </span>
                                    </div>
                                    {/* Views */}
                                    <div className="flex bg-[#F8F8F8] border py-1 px-2 rounded-full items-center gap-1">
                                        <IoEye size={12} className="text-black" />
                                        <span className="text-[10px] font-medium text-black">
                                            {sermon.views}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* YouTube Playlists */}
            <div className="border px-4 py-6 rounded-md mt-5">
                <h2 className="text-xl font-semibold font-poppins mb-4">YouTube Playlists</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredPlaylists.map((playlist, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow">
                            <div className="p-3">
                                <img
                                    src={playlist.image}
                                    alt={playlist.title}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            </div>
                            <div className="px-4 pb-4">
                                <h3 className="font-medium text-base">{playlist.title}</h3>
                                <p className="text-gray-500 text-xs mt-1">
                                    {playlist.description}
                                </p>
                                <div className="flex justify-between items-center text-xs text-gray-500 mt-3">
                                    {/* Time */}
                                    <div className="flex bg-[#F8F8F8] border py-1 px-2 rounded-full items-center gap-1">
                                        <IoTimeSharp size={12} className="text-black" />
                                        <span className="text-[10px] font-medium text-black">
                                            {playlist.duration}
                                        </span>
                                    </div>
                                    {/* Views */}
                                    <div className="flex bg-[#F8F8F8] border py-1 px-2 rounded-full items-center gap-1">
                                        <IoEye size={12} className="text-black" />
                                        <span className="text-[10px] font-medium text-black">
                                            {playlist.views}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Media;
