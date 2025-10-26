import React, { useRef, useState, useEffect } from "react";
import { ThumbsUp } from "lucide-react";
import { HiMiniPlay, HiMiniPause, HiMiniPlayPause } from "react-icons/hi2";
import { HiVolumeUp } from "react-icons/hi";
import { RiClosedCaptioningFill, RiSettingsFill } from "react-icons/ri";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { CgMiniPlayer } from "react-icons/cg";
import { BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { FiDownload } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import VideoPlay from "../../../assets/video/video.mp4";
import PlayProfile from "../../../assets/playprofile.png";
import { IoClose } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { FaHeart } from "react-icons/fa"
import SearchIconImg from '../../../assets/searchicon.png'

// Media Section Images
import MediaOneImg from "../../../assets/media1.png";
import MediaTwoImg from "../../../assets/media2.png";
import MediaThreeImg from "../../../assets/media3.png";

const LiveSermons = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showChat, setShowChat] = useState(false);

    // Play / Pause toggle
    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Update progress bar
    const handleTimeUpdate = () => {
        const current = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        setProgress((current / duration) * 100);
    };

    // Seek video
    const handleSeek = (e) => {
        const time = (e.target.value / 100) * videoRef.current.duration;
        videoRef.current.currentTime = time;
        setProgress(e.target.value);
    };

    // Toggle fullscreen
    const toggleFullscreen = () => {
        if (!isFullscreen) {
            if (containerRef.current.requestFullscreen) {
                containerRef.current.requestFullscreen();
            } else if (containerRef.current.webkitRequestFullscreen) {
                containerRef.current.webkitRequestFullscreen();
            } else if (containerRef.current.msRequestFullscreen) {
                containerRef.current.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    };

    // Detect fullscreen change
    useEffect(() => {
        const handleFsChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handleFsChange);
        document.addEventListener("webkitfullscreenchange", handleFsChange);
        document.addEventListener("msfullscreenchange", handleFsChange);

        return () => {
            document.removeEventListener("fullscreenchange", handleFsChange);
            document.removeEventListener("webkitfullscreenchange", handleFsChange);
            document.removeEventListener("msfullscreenchange", handleFsChange);
        };
    }, []);

    // Description
    const [isExpanded, setIsExpanded] = useState(false);
    const text =
        "Discover stories, insights, and live sessions that fuel resilience, ambition, and purpose. Start your journey to becoming the best version of yourself — one powerful stream at a time. This platform provides you with daily inspirations, life-changing perspectives, and community-driven support to help you grow spiritually and mentally. Whether you're seeking guidance, motivation, or just a spark of encouragement, this space is built for you. Keep exploring and never stop learning!";

    const toggleExpand = () => setIsExpanded(!isExpanded);

    // Media Section Data
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
        {
            title: "Praise and Worship in Real Time",
            description:
                "Sing along and lift your heart in worship with our live praise team.",
            image: MediaThreeImg,
            duration: "1h 30min",
            views: "2K",
            type: "video",
        }
    ];

    return (
        <div className="w-full bg-gray-200 pb-10 min-h-screen relative flex flex-col">
            
            <div
                className={`flex transition-all duration-300 ${showChat ? "w-full md:w-full" : "w-full"
                    }`}
            >
                {/* Left Content (Video + Details) */}
                <div
                    className={`transition-all duration-300 ${showChat ? "w-full md:w-2/3" : "w-full"
                        }`}
                >
                    {/* Video Section */}
                    <div ref={containerRef} className="relative w-full bg-black">
                        <video
                            ref={videoRef}
                            className="w-full md:h-[100vh] h-[35vh] object-cover"
                            onTimeUpdate={handleTimeUpdate}
                        >
                            <source src={VideoPlay} type="video/mp4" />
                            Your browser does not support video.
                        </video>

                        {/* Custom Controls */}
                        <div className="absolute bottom-0 left-0 w-full bg-transparent px-8 pb-5">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={progress}
                                onChange={handleSeek}
                                className="w-full cursor-pointer appearance-none md:h-[6px] h-[3px] rounded-lg"
                                style={{
                                    background: `linear-gradient(to right, #f00 ${progress}%, #555454 ${progress}%)`,
                                }}
                            />
                            <div className="flex items-center md:gap-5 gap-8 mt-2 text-white">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={togglePlay}
                                        className="bg-white py-2 px-3 rounded-md"
                                    >
                                        {isPlaying ? (
                                            <HiMiniPause className="text-black" />
                                        ) : (
                                            <HiMiniPlay className="text-black" />
                                        )}
                                    </button>
                                    <span className="md:text-sm text-[10px] text-white font-poppins">
                                        {Math.floor(videoRef.current?.currentTime || 0)}s /{" "}
                                        {Math.floor(videoRef.current?.duration || 0)}s
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <HiMiniPlayPause
                                        size={35}
                                        className="cursor-pointer bg-[#212121] text-white py-2 rounded-md px-[10px]"
                                    />
                                    <HiVolumeUp
                                        size={35}
                                        className="cursor-pointer bg-[#212121] text-white py-2 rounded-md px-[10px]"
                                    />
                                    <CgMiniPlayer
                                        size={35}
                                        className="cursor-pointer bg-[#212121] text-white py-2 rounded-md px-[10px]"
                                    />
                                    <RiClosedCaptioningFill
                                        size={35}
                                        className="cursor-pointer hidden md:block bg-[#212121] text-white py-2 rounded-md px-[10px]"
                                    />
                                    {isFullscreen ? (
                                        <BsFullscreenExit
                                            size={35}
                                            onClick={toggleFullscreen}
                                            className="cursor-pointer bg-[#212121] text-white py-2 rounded-md px-[10px]"
                                        />
                                    ) : (
                                        <BsFullscreen
                                            size={35}
                                            onClick={toggleFullscreen}
                                            className="cursor-pointer bg-[#212121] text-white py-2 rounded-md px-[10px]"
                                        />
                                    )}
                                    <RiSettingsFill
                                        size={35}
                                        className="cursor-pointer bg-[#212121] text-white py-2 rounded-md px-[10px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Title & Channel Section */}
                    <div className="p-4 md:px-8 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                            <h1 className="text-xl font-poppins md:text-2xl font-semibold md:mb-2 mb-1">
                                Salvation across the World
                            </h1>
                            <div className="flex gap-2 mt-1 md:mt-1 mb-4 text-gray-700">
                                <div className="flex bg-white cursor-pointer hover:bg-gray-400 hover:text-white py-2 px-3 rounded-md items-center gap-1">
                                    <ThumbsUp size={18} />{" "}
                                    <span className="font-poppins text-md">5K</span>
                                </div>
                                <div className="flex bg-white py-2 cursor-pointer px-3 hover:bg-gray-400 hover:text-white items-center rounded-md gap-1">
                                    <BiDislike size={18} /> <span>1</span>
                                </div>
                                <div className="flex bg-white py-2 cursor-pointer px-3 hover:bg-gray-400 hover:text-white rounded-md items-center gap-1">
                                    <PiShareFat size={18} />
                                </div>
                                <div className="flex bg-white py-2 cursor-pointer px-3 hover:bg-gray-400 hover:text-white rounded-md items-center gap-1">
                                    <FiDownload size={18} />
                                </div>
                                <div className="flex bg-white py-2 cursor-pointer px-3 hover:bg-gray-400 hover:text-white rounded-md items-center gap-1">
                                    <BsThreeDotsVertical size={18} />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:gap-[240px] gap-4">
                            {/* Left side profile */}
                            <div className="flex gap-3">
                                <img
                                    src={PlayProfile}
                                    alt="channel"
                                    className="md:w-16 w-14 object-contain"
                                />
                                <div>
                                    <p className="font-semibold md:text-xl text-sm font-poppins">
                                        PVTX
                                    </p>
                                    <p className="md:text-sm text-xs font-poppins mt-1 text-gray-400">
                                        44.9k subscribers
                                    </p>
                                </div>
                            </div>

                            {/* Buttons side by side */}
                            <div className="flex items-center gap-2 mt-2 md:mt-0">
                                <button className="bg-[#3CCDF8] font-poppins text-white text-xs py-3 md:text-lg md:px-10 px-[65px] rounded-md">
                                    Donate
                                </button>
                                <button
                                    onClick={() => setShowChat(!showChat)}
                                    className={`${showChat ? "bg-red-600" : "bg-[#3CCDF8]"
                                        } font-poppins text-white text-xs md:text-lg py-3 md:px-10 px-[65px] rounded-md`}
                                >
                                    {showChat ? "Close Chat" : "Chat"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chat Panel Desktop (Right Side) */}
                {showChat && (
                    <div className="hidden md:flex flex-col w-1/3 mx-3 my-2 rounded-md bg-white shadow-lg border-l relative z-0">
                        {/* Header */}
                        <div className="flex items-center justify-between p-3 border-b">
                    
                            <button className="text-black">
                                <HiDotsVertical />
                            </button>

                    
                            <h2 className="font-semibold text-center text-xl font-poppins flex-1">Chat</h2>

                        
                            <button onClick={() => setShowChat(false)} className="text-white rounded-full bg-black">
                                <IoClose />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-3 space-y-4 text-sm">
                            {/* Example message */}
                            <div className="flex items-start gap-2">
                                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-sm font-bold text-white">
                                    G
                                </div>
                                <div>
                                    <p className="font-semibold font-poppins">@boyTom</p>
                                    <p className="font-poppins text-gray-500">Hallelujah! God is good all the time!</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-sm font-bold text-white">
                                    G
                                </div>
                                <div>
                                    <p className="font-semibold font-poppins">@jane</p>
                                    <p className="font-poppins text-gray-500">Please pray for my family, we’re going through a hard time.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-sm font-bold text-white">
                                    G
                                </div>
                                <div>
                                    <p className="font-semibold font-poppins">@george</p>
                                    <p className="font-poppins text-gray-500">Thank you Pastor for this powerful word!</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-white">
                                    G
                                </div>
                                <div>
                                    <p className="font-semibold font-poppins">@eMAX</p>
                                    <p className="font-poppins text-gray-500">We need more like this 🙌</p>
                                </div>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="p-3">
                            <div className="flex items-center border bg-gray-100 rounded-lg px-3 py-3">
                                <input
                                    type="text"
                                    placeholder="Write a message"
                                    className="flex-1 text-sm font-poppins focus:outline-none bg-gray-100"
                                />
                                {/* Icon 1 */}
                                <button className="ml-2 text-black">
                                    <FaHeart className="mt-1" />
                                </button>
                                {/* Icon 2 */}
                                <button className="ml-2 text-gray-500 hover:text-gray-700">
                                    <img src={SearchIconImg} className="w-4 h-4 object-contain" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                )}
            </div>

            {/* Chat Panel Mobile Overlay */}
            {showChat && (
                <div className="fixed inset-0 z-50 flex md:hidden">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50"
                        onClick={() => setShowChat(false)}
                    ></div>

                    {/* Chat Drawer */}
                    <div
                        className={`absolute bottom-0 left-0 w-full bg-white rounded-t-lg shadow-lg transform transition-transform duration-300 ${showChat ? "translate-y-0" : "translate-y-full"
                            }`}
                        style={{ maxHeight: "80%" }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-3 border-b">
                        
                            <button className="text-gray-500">
                                <HiDotsVertical />
                            </button>

                            
                            <h2 className="font-semibold text-center font-poppins text-lg flex-1">Chat</h2>

                        
                            <button
                                onClick={() => setShowChat(false)}
                                className="text-white rounded-full bg-black"
                            >
                                <IoClose />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-3 space-y-4 text-sm">
                            {/* Example message */}
                            <div className="flex items-start gap-2">
                                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-sm font-bold text-white">
                                    G
                                </div>
                                <div>
                                    <p className="font-semibold font-poppins">@boyTom</p>
                                    <p>Hallelujah! God is good all the time!</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-sm font-bold text-white">
                                    G
                                </div>
                                <div>
                                    <p className="font-semibold font-poppins">@jane</p>
                                    <p>Please pray for my family, we’re going through a hard time.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-sm font-bold text-white">
                                    G
                                </div>
                                <div>
                                    <p className="font-semibold font-poppins">@george</p>
                                    <p>Thank you Pastor for this powerful word!</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-white">
                                    G
                                </div>
                                <div>
                                    <p className="font-semibold font-poppins">@eMAX</p>
                                    <p>We need more like this 🙌</p>
                                </div>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="p-3">
                            <div className="flex items-center bg-gray-200 border rounded-md px-3 py-3">
                                <input
                                    type="text"
                                    placeholder="Write a message"
                                    className="flex-1 text-sm bg-gray-200 font-poppins focus:outline-none"
                                />
                        
                                <button className="ml-2 text-black">
                                    <FaHeart className="mt-1" />
                                </button>
                            
                                <button className="ml-2 text-gray-500 hover:text-gray-700">
                                    <img src={SearchIconImg} className="w-4 h-4 object-contain" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            )}

            {/* Description */}
            <div className="w-full md:px-8 px-4 mt-4 relative z-0">
                <div className="bg-white py-6 px-4 rounded-md">
                    <p className="text-xs text-black font-poppins">
                        234,908 views | 4 days ago
                    </p>
                    <p
                        className={`mt-2 text-gray-500 font-poppins text-sm transition-all duration-300 ${isExpanded ? "" : "line-clamp-2"
                            }`}
                    >
                        {text}
                    </p>
                    <button
                        onClick={toggleExpand}
                        className="text-xs font-medium text-black font-poppins"
                    >
                        {isExpanded ? "Show less" : "See more"}
                    </button>
                </div>
            </div>

            
            <div className="border px-4 py-6 rounded-md bg-white shadow mt-5 mx-4 md:mx-8">
                <h2 className="text-xl font-semibold font-poppins mb-4">
                    More Live sermons
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {sermons.map((sermon, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow">
                            <div className="p-3">
                                <img
                                    src={sermon.image}
                                    alt={sermon.title}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            </div>
                            <div className="px-4 pb-4">
                                <h3 className="font-medium text-base">{sermon.title}</h3>
                                <p className="text-gray-500 text-xs mt-1">
                                    {sermon.description}
                                </p>
                                <div className="flex justify-between items-center text-xs text-gray-500 mt-3">
                                    <div className="flex bg-[#F8F8F8] border py-1 px-2 rounded-full items-center gap-1">
                                        <span className="text-[10px] font-medium text-black">
                                            {sermon.duration}
                                        </span>
                                    </div>
                                    <div className="flex bg-[#F8F8F8] border py-1 px-2 rounded-full items-center gap-1">
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
        </div>
    );
};

export default LiveSermons;
