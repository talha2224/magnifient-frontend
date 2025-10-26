import React, { useRef, useState, useEffect } from "react";
import {
    ThumbsUp,
    MessageCircle,
    Share2,
    Bookmark,
} from "lucide-react";
import { HiMiniPlay, HiMiniPause, HiMiniPlayPause } from "react-icons/hi2";
import { HiVolumeUp } from "react-icons/hi";
import { RiClosedCaptioningFill, RiSettingsFill } from "react-icons/ri";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { CgMiniPlayer } from "react-icons/cg";
import { BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { FiDownload } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import VideoPlay from '../../../assets/video/video.mp4'
import PlayProfile from '../../../assets/playprofile.png'
import { SlidersHorizontal } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { MdSort } from "react-icons/md";

const PlayScreen = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

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

    // Toggle fullscreen (enter/exit)
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

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    // Comment Section
    const [showReplies, setShowReplies] = useState({});
    const [showReplyInput, setShowReplyInput] = useState({});

    const toggleReplies = (id) => {
        setShowReplies((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleReplyInput = (id) => {
        setShowReplyInput((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="w-full bg-gray-200 pb-10 min-h-screen">
            {/* Video Section */}
            <div ref={containerRef} className="relative w-full bg-black">
                <video
                    ref={videoRef}
                    className="w-full md:h-[100vh] h-[35vh] object-cover"
                    onTimeUpdate={handleTimeUpdate}
                >
                    <source
                        src={VideoPlay}
                        type="video/mp4"
                    />
                    Your browser does not support video.
                </video>

                {/* Custom Controls */}
                <div className="absolute bottom-0 left-0 w-full bg-transparent px-8 pb-5">
                    {/* Progress Bar */}
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

                    {/* Controls Row */}
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

                        {/* Right Controls: 6 Icons */}
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
                            {/* Fullscreen Toggle */}
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
            <div className="p-4 md:px-8">

                {/* Channel + Stats */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    {/* Channel Info */}
                    <h1 className="text-xl font-poppins md:text-2xl font-semibold md:mb-2 mb-1">
                        Salvation across the World
                    </h1>
                    {/* Video Stats (Icons) */}
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

                <div className="flex flex-row md:gap-32 gap-[65px]">
                    <div className="flex gap-3">
                        <img
                            src={PlayProfile}
                            alt="channel"
                            className="md:w-16 w-14 object-contain"
                        />
                        <div>
                            <p className="font-semibold md:text-xl text-sm font-poppins">PVTX</p>
                            <p className="md:text-sm text-xs font-poppins mt-1 text-gray-400">44.9k subscribers</p>
                        </div>
                    </div>
                    <button className="bg-[#3CCDF8] font-poppins text-white text-xs md:text-lg md:px-20 px-10 rounded-md">
                        Follow
                    </button>
                </div>

                {/* Views and Description */}
                <div className="mt-4 bg-white py-6 px-4 rounded-md">
                    <p className="text-xs text-black font-poppins">
                        234,908 views | 4 days ago
                    </p>

                    {/* Description */}
                    <p
                        className={`mt-2 text-gray-500 font-poppins text-sm transition-all duration-300 ${isExpanded ? "" : "line-clamp-2"
                            }`}
                    >
                        {text}
                    </p>

                    {/* See more / Show less */}
                    <button
                        onClick={toggleExpand}
                        className="text-xs font-medium text-black font-poppins"
                    >
                        {isExpanded ? "Show less" : "See more"}
                    </button>
                </div>
            </div>



            {/* Comments Section */}
            <div className="p-4 md:px-8 bg-white md:mx-8 mx-4 rounded-md">
                {/* Top header */}
                <div className="flex items-center justify-between mb-4">
                    <p className="font-semibold font-poppins">6,789 Comments</p>
                    <div className="flex items-center gap-2 text-gray-600 text-sm cursor-pointer">
                        <MdSort size={16} className="mt-0.5" />
                        <span className="font-poppins text-black text-xs">Sort by</span>
                    </div>
                </div>

                {/* Comment Input */}
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        G
                    </div>
                    <input
                        type="text"
                        placeholder="Add a comment"
                        className="flex-1 bg-gray-200 focus:outline-none font-poppins text-sm rounded-md py-2 px-3"
                    />
                </div>

                {/* Comment Example */}
                <div className="space-y-6">
                    {[1, 2].map((item) => (
                        <div key={item} className="flex flex-col">
                            <div className="flex gap-3">
                                {/* Avatar */}
                                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold">
                                    G
                                </div>

                                {/* Comment Body */}
                                <div className="flex-1">
                                    <div className="flex gap-3">
                                        <p className="font-medium text-sm font-poppins">@boyTom</p>
                                        <p className="text-gray-500 font-poppins text-xs mt-0.5">
                                            20 hours ago
                                        </p>
                                    </div>

                            
                                    <div className="hidden md:flex justify-between items-start mt-2">
                                        {/* Comment Text */}
                                        <p className="text-gray-700 flex-1 pr-4">
                                            This right here is exactly what schools should’ve taught us!
                                            The way you’re breaking down income streams and mindset
                                            shifts is eye-opening.
                                        </p>

                                        
                                        <div className="flex items-center gap-3 text-gray-600 bg-gray-200 py-1 px-3 rounded-md text-sm ml-4 self-start">
                                            <div className="flex items-center gap-1 cursor-pointer">
                                                <ThumbsUp size={16} /> <span>5K</span>
                                            </div>
                                            <div className="flex items-center gap-1 cursor-pointer">
                                                <BiDislike size={16} /> <span>1</span>
                                            </div>
                                            <div className="flex items-center gap-1 cursor-pointer">
                                                <BsThreeDotsVertical size={16} />
                                            </div>
                                        </div>
                                    </div>

                            
                                    <div className="md:hidden mt-2">
                                        <p className="text-gray-700">
                                            This right here is exactly what schools should’ve taught us!
                                            The way you’re breaking down income streams and mindset
                                            shifts is eye-opening.
                                        </p>

                            
                                        <div className="flex items-center gap-6 text-gray-600 bg-gray-200 py-2 px-3 rounded-md text-sm mt-3">
                                            <div className="flex items-center gap-1 cursor-pointer">
                                                <ThumbsUp size={16} /> <span>5K</span>
                                            </div>
                                            <div className="flex items-center gap-1 cursor-pointer">
                                                <BiDislike size={16} /> <span>1</span>
                                            </div>
                                            <div className="flex items-center gap-1 cursor-pointer">
                                                <BsThreeDotsVertical size={16} />
                                            </div>
                                        </div>
                                    </div>

                                  
                                    <div className="hidden md:flex items-center gap-6 mt-4 text-sm">
                                        <button
                                            onClick={() => toggleReplies(item)}
                                            className="flex items-center gap-1 text-black font-semibold font-poppins"
                                        >
                                            90 Replies
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform ${showReplies[item] ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        {!showReplyInput[item] ? (
                                            <button
                                                onClick={() => toggleReplyInput(item)}
                                                className="text-xs text-white py-2 px-6 rounded-md bg-black"
                                            >
                                                Reply
                                            </button>
                                        ) : (
                                            <div className="flex items-center gap-2 flex-1">
                                                <input
                                                    type="text"
                                                    placeholder="Write a reply..."
                                                    className="flex-1 border bg-gray-200 py-2 focus:outline-none rounded-md px-3 text-sm"
                                                />
                                                <button className="text-xs text-white py-[10px] px-3 rounded-md bg-black font-poppins">
                                                    Post
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {/* Mobile: Replies row */}
                                    <div className="md:hidden mt-4 text-sm">
                                        <button
                                            onClick={() => toggleReplies(item)}
                                            className="flex items-center gap-1 text-black font-semibold font-poppins"
                                        >
                                            90 Replies
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform ${showReplies[item] ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        <div className="mt-3">
                                            {!showReplyInput[item] ? (
                                                <button
                                                    onClick={() => toggleReplyInput(item)}
                                                    className="text-xs text-white py-2 px-6 rounded-md bg-black"
                                                >
                                                    Reply
                                                </button>
                                            ) : (
                                                <div className="flex items-center gap-2 flex-1">
                                                    <input
                                                        type="text"
                                                        placeholder="Write a reply..."
                                                        className="flex-1 border bg-gray-200 py-2 focus:outline-none rounded-md px-3 text-sm"
                                                    />
                                                    <button className="text-xs text-white py-[10px] px-3 rounded-md bg-black font-poppins">
                                                        Post
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>


                                    {/* Replies Section */}
                                    {showReplies[item] && (
                                        <div className="ml-8 mt-4 space-y-4">
                                            <div className="flex gap-3">
                                                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs text-white">
                                                    R
                                                </div>
                                                <div>
                                                    <p className="font-semibold">@replyUser</p>
                                                    <p className="text-gray-500 text-xs">2 hours ago</p>
                                                    <p className="mt-1 text-gray-700 text-sm">
                                                        Totally agree with you! Schools never touched this
                                                        topic.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlayScreen;
