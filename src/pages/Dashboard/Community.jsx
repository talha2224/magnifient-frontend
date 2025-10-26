import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaRegEye, FaRegThumbsUp, FaRegCommentAlt, FaRegShareSquare } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { RiShareForwardLine } from "react-icons/ri";
import { BsSendFill } from "react-icons/bs";
import GroupsImg from '../../assets/media3.png'
import NewPostModal from "../../components/Dashboard/Community/NewPost";
import { Link } from "react-router-dom";

const Community = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [isOpen, setIsOpen] = useState(false);

    const posts = [
        {
            id: 1,
            type: "prayer",
            user: "Daniel Orleans",
            time: "40 Mins ago",
            avatar: null,
            text: "Please pray for my daughter’s health. She’s undergoing surgery tomorrow and I believe God will heal her. 🙏",
            views: "12k",
            likes: "5k",
            comments: "100",
            shares: "100",
        },
        {
            id: 2,
            type: "group",
            user: "Daniel Orleans",
            time: "40 Mins ago",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "Join our Friday night Bible study live at 7 PM — Let’s dive into the Book of Romans together.",
            views: "12k",
            likes: "5k",
            comments: "100",
            shares: "100",
        },
    ];

    const groups = [
        {
            id: 1,
            title: "Faith Builders",
            members: "12k Members",
            image: GroupsImg,
        },
        {
            id: 2,
            title: "Prayer Warriors",
            members: "12k Members",
            image: GroupsImg,
        },
    ];

    const suggested = [
        {
            id: 1,
            title: "Faith Builders",
            members: "12k Members",
            image: GroupsImg,
        },
    ];

    // Filter posts based on activeTab
    const filteredPosts = posts.filter((post) => {
        if (activeTab === "all") return true;
        return post.type === activeTab;
    });

    return (
        <div className="w-full md:px-4">
            {/* Top Tabs and Button */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
                <div className="flex gap-2">
                    <button
                        onClick={() => setActiveTab("all")}
                        className={`md:px-4 px-3 py-2 font-poppins rounded-md font-medium md:text-sm text-[12px] ${activeTab === "all"
                            ? "bg-sky-400 text-white"
                            : "bg-white border text-gray-600"
                            }`}
                    >
                        All Posts
                    </button>
                    <button
                        onClick={() => setActiveTab("prayer")}
                        className={`md:px-4 px-3 py-2 rounded-md font-poppins font-medium md:text-sm text-[12px] ${activeTab === "prayer"
                            ? "bg-sky-400 text-white"
                            : "bg-white border text-gray-600"
                            }`}
                    >
                        Prayer Wall
                    </button>
                    <button
                        onClick={() => setActiveTab("group")}
                        className={`md:px-4 px-3 py-2 rounded-md font-medium font-poppins md:text-sm text-[12px] ${activeTab === "group"
                            ? "bg-sky-400 text-white"
                            : "bg-white border text-gray-600"
                            }`}
                    >
                        Group posts
                    </button>
                </div>
                <button onClick={() => setIsOpen(true)} className="bg-black text-white md:px-6 px-4 font-poppins py-2 rounded-md md:text-sm text-[12px]">
                    Make a post
                </button>

                {/* Make Post Modal */}
                {isOpen && <NewPostModal onClose={() => setIsOpen(false)} />}
            </div>

            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Left Side - Posts */}
                <div className="lg:col-span-2 border bg-white p-5 rounded-md space-y-4">
                    {filteredPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-lg shadow border p-4 space-y-3"
                        >
                            {/* Post Header */}
                            <div className="flex justify-between">
                                <div className="flex items-center gap-1">
                                    {post.avatar ? (
                                        <img
                                            src={post.avatar}
                                            alt={post.user}
                                            className="w-14 h-14 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="md:w-14 md:h-14 h-10 w-10 rounded-full bg-gray-300"></div>
                                    )}
                                    <div>
                                        <p className="font-semibold font-poppins">{post.user}</p>
                                        <p className="text-xs text-gray-500 text-sm font-poppins">{post.time}</p>
                                    </div>
                                </div>
                                <HiDotsVertical className="text-black" />
                            </div>

                            {/* Post Text */}
                            <div className="bg-gray-100 px-5 py-4 md:pr-32 rounded-md">
                                <p className="text-sm text-gray-800 font-poppins">{post.text}</p>
                            </div>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-3 text-sm text-gray-700">
                                <div className="flex items-center font-poppins cursor-pointer border rounded-md px-3 py-2 gap-1">
                                    <MdOutlineRemoveRedEye /> {post.views}
                                </div>
                                <div className="flex items-center border font-poppins rounded-md cursor-pointer px-3 py-2 gap-1">
                                    <FaRegThumbsUp /> {post.likes}
                                </div>
                                <div className="flex items-center border rounded-md font-poppins cursor-pointer px-3 py-2 gap-1">
                                    <TbMessage /> {post.comments}
                                </div>
                                <div className="flex items-center border rounded-md font-poppins cursor-pointer px-3 py-2 gap-1">
                                    <RiShareForwardLine /> {post.shares}
                                </div>
                            </div>

                            {/* Comment Box */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="Add comments"
                                    className="flex-1 border bg-gray-100 rounded px-3 py-3 text-sm focus:outline-none"
                                />
                                <button className="bg-sky-400 text-white py-[15px] px-4 rounded">
                                    <BsSendFill />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side - Groups */}
                <div className="space-y-4">
                    {/* Your Groups */}
                    <div className="bg-white rounded-lg shadow border p-4">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="font-semibold font-poppins">Your groups</h3>
                            <button className="text-xs text-black font-poppins underline">See More</button>
                        </div>
                        <div className="space-y-4">
                            {groups.map((group) => (
                                <div
                                    key={group.id}
                                    className="bg-gray-50 rounded-md overflow-hidden shadow-sm"
                                >
                                    {/* Image full width top */}
                                    <img
                                        src={group.image}
                                        alt={group.title}
                                        className="w-full h-32 object-cover"
                                    />

                                    {/* Content below */}
                                    <div className="flex justify-between items-center p-3">
                                        <div>
                                            <p className="font-medium text-sm font-poppins">{group.title}</p>
                                            <p className="text-xs text-gray-500 font-poppins">{group.members}</p>
                                        </div>
                                        <button className="bg-sky-400 text-white text-sm px-6 py-2 rounded">
                                            Join
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Suggested Groups */}
                    <div className="bg-white rounded-lg shadow border p-4">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="font-semibold font-poppins">Suggested groups</h3>
                            <Link to='/suggestgroup'>
                                <button className="text-xs font-poppins text-black underline">See More</button>
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {suggested.map((group) => (
                                <div
                                    key={group.id}
                                    className="bg-gray-50 rounded-md overflow-hidden shadow-sm"
                                >
                                    {/* Image full width top */}
                                    <img
                                        src={group.image}
                                        alt={group.title}
                                        className="w-full h-32 object-cover"
                                    />

                                    {/* Content below */}
                                    <div className="flex justify-between items-center p-3">
                                        <div>
                                            <p className="font-medium text-sm font-poppins">{group.title}</p>
                                            <p className="text-xs text-gray-500 font-poppins">{group.members}</p>
                                        </div>
                                        <button className="bg-sky-400 text-white text-sm px-6 py-2 rounded">
                                            Join
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Community;
